import Em from 'ember';

var SubcontentController = Em.Controller.extend({
	columns: [
		{ order: 0, name: 'expando', label: 'Expand subcontent', type: 'expando', width: 50, isResizable: false, isSortable: false, showLabel: false },
		{ order: 1, name: 'id', label: 'Employee ID', isHidden: true },
		{ order: 2, name: 'given_name', label: 'Given Name' },
		{ order: 3, name: 'family_name', label: 'Family Name' }
	],
	config: {
		hasSubcontent: true,
		wrapFocusHorizontal: true,
		wrapFocusVertical: true,
		subcontentView: 'embedded',
		sortProperties: ['family_name'],
		types: [
			{ name: 'expando', view: 'expando-cell' }
		]
	}
});

export default SubcontentController;
