import Ember from 'ember';

export default Ember.Controller.extend({

  selectedData: null,

  actions: {
    dataChangedAction(selectedData) {
      this.transitionToRoute('characters.character.quotes', selectedData.get('slug'));
    }
  }
});
