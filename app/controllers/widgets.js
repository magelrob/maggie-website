import Ember from 'ember';

export default Ember.Controller.extend({
    itemActions: [ "Edit", "Remove", "Hide"],
    selectedAction: null,
    someHTML : '<h1>A title &nbsp; &nbsp; &nbsp; &nbsp; title</h1>',
    author: {
    	name: 'Maggie',
    	website: 'http://wellzesta.com'
    },
    actions: {
      update_selected: function(component, id, value) {
        this.set('selectedAction', id);
      }
    }
});
