import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',

  archList: Ember.computed('package.versions', function() {
    if (this.get('package.versions')) {
      return this.get('package.versions').map((version) => {
        return version.Architecture;
      });
    } else {
      return [];
    }
  }),


  versionList: Ember.computed.uniq('versionListNonUnique'),

  versionListNonUnique: Ember.computed('package.versions', function() {
    if (this.get('package.versions')) {
      return this.get('package.versions').map((version) => {
        return version.Version;
      });
    } else {
      return [];
    }
  }),

});
