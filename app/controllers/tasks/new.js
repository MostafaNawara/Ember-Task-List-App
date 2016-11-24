import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addTask: function () {
      var title = this.get('title');
      var description = this.get('description');
      var date = this.get('date');

      // Add the task to the database (Firebase).
      var newTask = this.store.createRecord('task', {
        title: title,
        description: description,
        date: new Date(date)
      });

      // Save to the database (Firebase).
      newTask.save();

      // Clear the form
      this.setProperties({
        title: '',
        description: '',
        date: ''
      })
    }
  }
});
