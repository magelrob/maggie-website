import Ember from 'ember';

export default Ember.Controller.extend({
    itemActions: [ "Edit", "Remove", "Hide"],
    selectedAction: null,

    actions: {
      update_selected: function(component, id, value) {
        this.set('selectedAction', id);
      }
    }
});
