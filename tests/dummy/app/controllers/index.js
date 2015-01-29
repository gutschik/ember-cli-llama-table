import Em from 'ember';
import RemoveButton from '../views/remove-button-cell';
var set = Em.set;

var IndexController = Em.Controller.extend({
	tableColumns: Em.A([
		Em.Object.create({
			name: 'episode',
			label: 'Episode',
			order: 1,
			type: 'number'
		}),
		Em.Object.create({
			name: 'title',
			label: 'Title',
			order: 2
		}),
		Em.Object.create({
			name: 'airdate',
			label: 'Original airdate',
			order: 5
		}),
		Em.Object.create({
			name: 'description',
			label: 'Description',
			order: 3
		}),
		Em.Object.create({
			name: 'million_viewers',
			label: 'Viewers (in millions)',
			order: 4,
			type: 'number'
		}),
		Em.Object.create({
			name: 'screenshot',
			label: 'Screenshot URL',
			order: 7,
			isHidden: true
		}),
		Em.Object.create({
			name: 'remove',
			label: 'Remove',
			order: 8,
			type: 'remove'
		})
	]),
	tableData: [
		{
			screenshot: 'http://i.imgur.com/r3WXxQ8.jpg',
			episode: 1,
			title: 'Pilot',
			airdate: 'December 2, 2013',
			million_viewers: 1.095,
			description: 'Rick moves in with his daughter\'s family and establishes himself as a bad influence on his grandson, Morty.'
		},
		{
			screenshot: 'http://i.imgur.com/aaBXAXz.jpg',
			episode: 2,
			title: 'Lawnmower Dog',
			airdate: 'December 9, 2013',
			million_viewers: 1.510,
			description: 'Rick helps Jerry out with the dog, Snuffles. Don\'t even trip about this episode because they also incept the dreams of Mr. Goldenfold.'
		},
		{
			screenshot: 'http://i.imgur.com/AzbEBCT.jpg',
			episode: 3,
			title: 'Anatomy Park',
			airdate: 'December 16, 2013',
			million_viewers: 1.302,
			description: 'On this Christmas-themed episode, Jerry forces the family to bond during the holiday. Rick shrinks Morty in size to enter his creation, Anatomy Park.'
		},
		{
			screenshot: 'http://i.imgur.com/9p2KVpx.jpg',
			episode: 4,
			title: 'M. Night Shaym-Aliens!',
			airdate: 'January 13, 2014',
			million_viewers: 1.476,
			description: 'Rick, Morty, and Jerry find themselves trapped in a life-like simulation by an alien race of intergalactic scammers known as the Zigerions.'
		},
		{
			screenshot: 'http://i.imgur.com/ARS7yUu.jpg',
			episode: 5,
			title: 'Meeseeks and Destroy',
			airdate: 'January 20, 2014',
			million_viewers: 1.610,
			description: 'Morty makes a bet with Rick that he can lead a fun, successful adventure. Jerry, Beth, and Summer summon various helpers named Mr. Meeseeks to help solve their problems.'
		},
		{
			screenshot: 'http://i.imgur.com/6F7a5us.jpg',
			episode: 6,
			title: 'Rick Potion No. 9',
			airdate: 'January 27, 2014',
			million_viewers: 1.746,
			description: 'Morty asks Rick to brew him up a love potion to gain the affections of Jessica, but the potion fuses with an airborne flu virus and infects the worldwide population.'
		},
		{
			screenshot: 'http://i.imgur.com/IsUlCuf.jpg',
			episode: 7,
			title: 'Raising Gazorpazorp',
			airdate: 'March 10, 2014',
			million_viewers: 1.762,
			description: 'When Morty asks Rick to buy him a sex robot from a space pawn shop, it concieves his own half-alien son, leading Rick and Summer to investigate the robot\'s planet of origin.'
		},
		{
			screenshot: 'http://i.imgur.com/g8tdmZG.jpg',
			episode: 8,
			title: 'Rixty Minutes',
			airdate: 'March 17, 2014',
			million_viewers: 1.477,
			description: 'Rick installs a device within the family\'s TV set allowing them to watch shows from all possible realities, causing Jerry and Beth to contemplate their past decisions.'
		},
		{
			screenshot: 'http://i.imgur.com/51EVhy3.jpg',
			episode: 9,
			title: 'Something Ricked This Way Comes',
			airdate: 'March 24, 2014',
			million_viewers: 1.543,
			description: 'Summer gets a job at a strange shop selling eccentric, cursed items, Jerry commits himself to helping Morty on a science project.'
		},
		{
			screenshot: 'http://i.imgur.com/p4SXVnQ.jpg',
			episode: 10,
			title: 'Close Rick-counters of the Rick Kind',
			airdate: 'April 7, 2014',
			million_viewers: 1.750,
			description: 'Rick and Morty are imprisoned by a council of Rick\'s across alternate timelines for a crime they didn\'t commit, Jerry bonds with an alternate-reality Rick.'
		},
		{
			screenshot: 'http://i.imgur.com/aFELDzg.jpg',
			episode: 11,
			title: 'Ricksy Business',
			airdate: 'April 14, 2014',
			million_viewers: 1.823,
			description: 'Rick hosts a party while Beth and Jerry are away.'
		}
	],
	config: {
		types: [
			{
				name: 'remove',
				view: RemoveButton
			}
		]
	},
	actions: {
		addColumn: function () {
			var newCol = Em.Object.create({
				name: 'screenshot',
				label: 'Screenshot URL',
				order: 0
			});
			this.get('tableColumns').pushObject(newCol);
		},
		shuffleColumns: function () {
			var cols = this.get('tableColumns');
			var n = this.get('tableColumns.length');
			var j, tmp;
			for (var i = n - 1; i >= 1; i--) {
				j = Math.floor(Math.random() * i);
				tmp = cols.objectAt(j).get('order');
				cols.objectAt(j).set('order', cols.objectAt(i).get('order'));
				cols.objectAt(i).set('order', tmp);
			}
		},
		updateData: function () {
			var data = this.get('tableData');
			data.forEach(function (record) {
				var value = 1 + Math.random() * 1;
				value = value.toFixed(3);
				value = Number(value);
				set(record, 'million_viewers', value);
			});
		},
		removeRow: function (index) {
			this.get('tableData').removeAt(index);
		}
	}
});

export default IndexController;
