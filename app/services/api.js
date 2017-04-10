import Ember from 'ember';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),

  loadPackages: Ember.on('init', function() {
    const request = this.get('ajax').request('/packages');
    this.set('packages', request);
  }),

  getDistributions() {
    return this.get('ajax').request('/distributions');
  },

  getAllPackages() {
    return this.get('packages');
  },

  getPackages(distribution) {
    return this.get('ajax').request(`/distributions/${distribution}/packages`);
  },

  getPackage(packageName) {
    return this.get('ajax').request(`/packages/${packageName}`);
  },

  getPackageInDistribution(distribution, packageName) {
    let url = `/packages/${distribution}/${packageName}`;
    return this.get('ajax').request(url);
  }
});
