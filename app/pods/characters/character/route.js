import Ember from 'ember';

export default Ember.Route.extend({

  selectedCharacter: null,

  model: function(params) {
    // modelFor you can grab from any parent route (since you are sub nested route)
    let characters = this.modelFor('characters');
    // params.slug is the character
    console.log('trying to find slug from characters');
    let selectedCharacter = characters.findBy('slug', params.slug);
    this.set('selectedCharacter', selectedCharacter);
    return selectedCharacter;
  },

  actions:{
    didTransition: function(){
      let characters = this.modelFor('characters');
      let selectedCharacter = this.modelFor('characters.character');

      console.log('selectedCharacter: ', selectedCharacter);
      this.send('routeChange', selectedCharacter);
    }
  }
});
