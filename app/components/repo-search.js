import Ember from 'ember';

export default Ember.Component.extend({
  api: Ember.inject.service(),

  debounceSearch() {
    Ember.run.debounce(this, this.updateSearch, 70, true);
  },

  updateSearch() {
    // This is wrong, this has a race condition bc the callback is not being debounced
    this.get('api').getAllPackages().then((packages) => {
      const search = this.get('search');
      const regexp = RegExp(`.*${search}.*`, 'g');
      const results = packages.match(regexp);
      this.set('results', results);
    });
  }
});
