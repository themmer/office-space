import Ember from 'ember';

export default Ember.Controller.extend({

  selectedCharacter: null,

  actions: {
    dataChangedAction(selectedData) {
      console.log('yep', selectedData);
    }
  }
});
