import Em from 'ember';
var get = Em.get;
var set = Em.set;
var observer = Em.observer;
var computed = Em.computed;
var alias = computed.alias;

var LlamaFooter = Em.CollectionView.extend({
	classNames: 'llama-footer',
	itemViewClass: alias('controller.FooterColumngroupView'),
	columngroupViews: alias('childViews'),
	contentBinding: 'columngroups',
	scrollTop: alias('controller.scrollTop'),

	columngroups: null,
	rows: null,

	data: computed('controller.footerController', function (key, val, old) {
		if (old) {
			old.destroy();
		}
		var Constructor = this.get('controller.footerController');
		var instance;
		if (typeof Constructor === 'function') {
			instance = Constructor.create({
				content: this.get('rows')
			});
		}
		return instance;
	}),

	didInsertElement: function () {
		this._super();
		this.updateScrollPosition();
	},

	createChildView: function (View, attrs) {
		var data = this.get('data');
		var columns = get(attrs, 'content');
		set(attrs, 'columns', columns);
		set(attrs, 'data', data);
		return this._super(View, attrs);
	},

	updateScrollPosition: observer('scrollTop', function () {
		var $footer = Em.$(this.$());
		$footer.css('marginBottom', this.get('scrollTop') * -1);
	}),

	willDestroy: function () {
		this.get('data').destroy();
		this._super();
	}
});

export default LlamaFooter;
