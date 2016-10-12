import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['repo-showMultiline-container'],
  input: null,
  multilineText: Ember.computed('input', function() {
    if (this.get('input')) {
      return this.get('input').split('\n');
    } else {
      return "";
    }
  })
});
