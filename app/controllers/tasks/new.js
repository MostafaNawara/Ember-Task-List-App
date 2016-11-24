import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addTask: function () {
      var title = this.get('title');
      var description = this.get('description');
      var date = this.get('date');

      // Add the task to the database
    }
  }
});
