import Ember from 'ember';

export default Ember.Controller.extend({
  selectCoverFlowCallback: Ember.computed(function() {
    var _this = this;
    return function(event, cover, index) {
      let characters = _this.model;
      let selectedCharacter = characters[index];
      _this.set('selectedCharacter', selectedCharacter);
    };
  }),

  selectedCharacter: null,

  selectedIndex: 1
});
