import Ember from 'ember';

export default Ember.Route.extend({
  stations: Ember.inject.service(),

  model() {
    return this.get('stations').changelog();
  },
});
