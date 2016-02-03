import Ember from 'ember';

export default Ember.Controller.extend({
	nav: {
		isWidgetsActive: true,
		isIndexActive: 'active',
		isBusterActive: true
	},
	actions: {
		menuClickedHandler(item) {
			console.log('button ' + item + ' pressed');
			$('.ui .item').removeClass('active');
			var sel = '#' + item;
			$(sel).addClass('active');
			this.transitionToRoute(item);
		},
		toggleSidebar() {
			$('.ui.sidebar').sidebar('toggle');
		}
	}
});

