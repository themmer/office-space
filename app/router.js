import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('characters', {path: '/'},  function() {
    this.route('character', {
      path: ':slug'
    }, function() {
      this.route('quotes');
    });
  });
});

export default Router;
