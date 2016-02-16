import Ember from 'ember';

export default Ember.Component.extend({

  selectedCharacter: null,

  quoteLine: null,

  isCharacterQuote: Ember.computed('selectedCharacter', 'quoteLine', function() {
    let selectedCharacter = this.get('selectedCharacter');
    let quoteLine = this.get('quoteLine');

    if(!selectedCharacter || !quoteLine) {
      return false;
    }

    return selectedCharacter.name === quoteLine.character;
  })
})
;
