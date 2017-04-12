import Ember from 'ember';

export default Ember.Component.extend({
  api: Ember.inject.service(),
  fullResults: [],
  limit: undefined,
  page: 0,
  animDuration: 250, /* Duración de la animación */

  debounceSearch: Ember.observer('search', function() {
    Ember.run.debounce(this, this.updateSearch, 150);
  }),

  results: Ember.computed('fullResults', 'page', 'limit', function() {
    const limit = this.get('limit');
    const page = this.get('page');
    return this.get('fullResults').slice(limit * page, limit * (page + 1));
  }),

  disableNext: Ember.computed('fullResults.length', 'page', 'limit', function() {
    const limit = this.get('limit');
    const page = this.get('page');
    const results = this.get('fullResults.length');
    return results <= limit * (page + 1) || results === 0;
  }),

  disablePrevious: Ember.computed.equal('page', 0),

  next() {
    const page = this.get('page');
    this.set('page', page + 1);
  },

  previous() {
    const page = this.get('page');
    this.set('page', page - 1);
  },

  showOrHide() {
    const duration = this.get('animDuration');

    if(this.get('search').length !== 0) {
      this.$('.results').show(duration);
    } else {
      this.$('.results').hide(duration);
    }
  },

  updateSearch() {
    if(this.get('search') === '') {
      this.set('fullResults', []);
      Ember.run.schedule('afterRender', this, this.showOrHide);
      return;
    }
    // This is wrong, this has a race condition bc the callback is not being debounced
    this.get('api').getAllPackages().then((packages) => {
      const search = this.get('search');
      const regexp = new RegExp(`.*${search}.*`, 'g');
      const results = packages.match(regexp);
      this.set('fullResults', results || []);
      this.set('page', 0);
      Ember.run.schedule('afterRender', this, this.showOrHide);
    });
  }
});
