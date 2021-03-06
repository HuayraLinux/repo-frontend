import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('repo-breadcrumbs', 'Integration | Component | repo breadcrumbs', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{repo-breadcrumbs}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#repo-breadcrumbs}}
      template block text
    {{/repo-breadcrumbs}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
