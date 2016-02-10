import Ember from 'ember';

//var Character = Ember.Object.extend({
//  name: '',
//  realName: '',
//  quotes: []
//});
//
//var Quote = Ember.Object.extend({
//  quote: '',
//});

var Character = Ember.Object.extend({
  name: '',
  realName: '',
  quotes: ['1', '2', '3'],
  slug: Ember.computed('name', function() {
    console.log('Recomputing slug');
    return this.get('name').dasherize();
  })
});

var characters =
  [Character.create({
    name: 'Bill Lumbergh',
    realName: ''
  }),
    Character.create({
      name: 'Bob Porter',
      realName: '',
    }),
    Character.create({
      name: 'Bob Slydell',
      realName: ''
    }),
    Character.create({
      name: 'Drew',
      realName: ''
    }),
    Character.create({
      name: 'Joanna',
      realName: ''
    }),
    Character.create({
      name: 'Lawrence',
      realName: ''
    }),
    Character.create({
      name: 'Michael Bolton',
      realName: ''
    }),
    Character.create({
      name: 'Milton Waddams',
      realName: ''
    }),
    Character.create({
      name: 'Nina',
      realName: ''
    }),
    Character.create({
      name: 'Peter Gibbons',
      realName: ''
    }),
    Character.create({
      name: 'Samir Nagheenanajar',
      realName: ''
    }),
    Character.create({
      name: 'Tom Smykowski',
      realName: ''
    })];

export default Ember.Route.extend({
  model: function() {
    // This is where you can load data via promises (E.G. rest service)
    return characters;
  }
});
