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
  [
    Character.create({
      name: 'Bill Lumbergh',
      realName: 'Gary Cole'
    }),
    Character.create({
      name: 'Bob Porter',
      realName: '	Paul Willson',
    }),
    Character.create({
      name: 'Bob Slydell',
      realName: 'John C. McGinley'
    }),
    Character.create({
      name: 'Drew',
      realName: 'Greg Pitts'
    }),
    Character.create({
      name: 'Joanna',
      realName: 'Jennifer Aniston'
    }),
    Character.create({
      name: 'Lawrence',
      realName: 'Diedrich Bader'
    }),
    Character.create({
      name: 'Michael Bolton',
      realName: 'David Herman'
    }),
    Character.create({
      name: 'Milton Waddams',
      realName: 'Stephen Root'
    }),
    Character.create({
      name: 'Nina',
      realName: 'Kinna McInroe'
    }),
    Character.create({
      name: 'Peter Gibbons',
      realName: 'Ron Livingston'
    }),
    Character.create({
      name: 'Samir Nagheenanajar',
      realName: 'Ajay Naidu'
    }),
    Character.create({
      name: 'Tom Smykowski',
      realName: 'Richard Riehle'
    })];

export default Ember.Route.extend({
  model: function() {
    // This is where you can load data via promises (E.G. rest service)
    return characters;
  }
});
