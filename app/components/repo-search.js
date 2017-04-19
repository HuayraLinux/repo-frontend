import Ember from 'ember';
import environment from '../config/environment';

export default Ember.Component.extend({

  apiSettings: {
    url: environment['ember-cli-mirage'].enabled ?
      `/packages/search/{query}` :
      `${environment.URL_API_BACKEND}/packages/search/{query}`
  },

  showPackage(selection) {
    this.get('router').transitionTo('packages.showPackage', selection.title);
  }
});
