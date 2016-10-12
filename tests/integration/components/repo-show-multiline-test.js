import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('repo-show-multiline', 'Integration | Component | repo show multiline', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{repo-show-multiline}}`);

  assert.equal(this.$().text().trim(), '');

  this.set('demoText', "Un texto\nmultilineas.");

  this.render(hbs`{{repo-show-multiline input=demoText}}`);

  assert.equal(this.$().text().trim().replace('\n ', ''), 'Un texto multilineas.');
});
