import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('repo-package-in-distro-row', 'Integration | Component | repo package in distro row', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{repo-package-in-distro-row}}`);
  assert.equal(this.$().text().trim(), '');
});
