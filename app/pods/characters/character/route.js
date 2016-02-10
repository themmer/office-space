import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    // modelFor you can grab from any parent route (since you are sub nested route)
    var characters = this.modelFor('characters');
    // params.slug is the character
    return characters.findBy('slug', params.slug);
  }
});
