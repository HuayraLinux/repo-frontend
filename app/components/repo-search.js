import Ember from 'ember';

export default Ember.Component.extend({
  api: Ember.inject.service(),
  fullResults: [],
  limit: undefined,
  page: 0,

  debounceSearch: Ember.observer('search', function() {
    Ember.run.debounce(this, this.updateSearch, 150);
    console.log(this.get('search'));
  }),

  results: Ember.computed('fullResults', 'page', 'limit', function() {
    const limit = this.get('limit');
    const page = this.get('page');
    return this.get('fullResults').slice(limit * page, limit * (page + 1));
  }),

  disableNext: Ember.computed('fullResults.length', 'page', 'limit', function() {
    const limit = this.get('limit');
    const page = this.get('page');
    const results = this.get('fullResults.length')
    return results <= limit * (page + 1) || results === 0;
  }),

  disablePrevious: Ember.computed('page', function() {
    const page = this.get('page');
    return page === 0;
  }),

  next() {
    const page = this.get('page');
    this.set('page', page + 1);
  },

  previous() {
    const page = this.get('page');
    this.set('page', page - 1);
  },

  updateSearch() {
    if(this.get('search') === '') {
      this.set('fullResults', []);
      return;
    }
    // This is wrong, this has a race condition bc the callback is not being debounced
    this.get('api').getAllPackages().then((packages) => {
      const search = this.get('search');
      const limit = this.get('limit');
      const regexp = new RegExp(`.*${search}.*`, 'g');
      const results = packages.match(regexp);
      this.set('fullResults', results || []);
      this.set('page', 0);
    });
  }
});
