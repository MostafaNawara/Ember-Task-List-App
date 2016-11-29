import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editTask: function (id) {
      var _self = this;
      var title = this.get('model.title');
      var description = this.get('model.description');
      var date = this.get('model.date');

      // Update value
      this.store.findRecord('task', id).then(function (task) {
        task.set('title', title);
        task.set('description', description);
        task.set('date', new Date(date));

        // Save to the database (Firebase).
        task.save();

        // close the form
        _self.transitionToRoute('tasks');
      });
    }
  }
});
