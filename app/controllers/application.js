import Ember from 'ember';

export default Ember.Controller.extend({
	
	nav: {
		widgets: 'item',
		index: 'item',
		buster: 'item'
	},
	
	actions: {
		widgetsButtonHandler: function (){
			console.log('widgets button pressed');
			this.set('nav.widgets','active item');
			this.transitionTo('widgets');
		}
	}
});

