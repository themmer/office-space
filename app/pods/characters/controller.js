import Ember from 'ember';

export default Ember.Controller.extend({

  selectedCharacter: null,

  actions: {
    dataChangedAction(selectedData) {
      this.set('selectedCharacter', selectedData);
      this.transitionToRoute('characters.character.quotes', selectedData.get('slug'));
      return true;
    }
  }
});
