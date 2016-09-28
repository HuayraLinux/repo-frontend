import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');

  this.route('distributions', {path: 'distributions'}, function() {
    this.route('index', {path: ""});
    this.route('show', {path: ":id"});
  });

  this.route('packages', {path: 'packages'}, function() {
    this.route('showPackage', {path: "all/:id"});
    this.route('showVersion', {path: ":distro/:id"});
  });

  this.route('package');
  this.route('bad_url', {path: "/*bad_url"});
});

export default Router;
