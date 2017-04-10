import Ember from 'ember';

export default Ember.Component.extend({
  api: Ember.inject.service(),
  limit: 15,

  didInsertElement() {
    this.get('api').getAllPackages().then((packages) => {
      this.$('.ui.search').search({
        source: packages,
        maxResults: this.get('limit'),
        showNoResults: true
      });
    });
  }
});
