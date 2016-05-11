import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pipeline-view', 'Integration | Component | pipeline view', {
  integration: true
});

test('it renders', function(assert) {
  this.set('pipeline', {
    title: 'Some pipeline',
    description: 'Some description',
    steps: [
      {
        title: 'Step 1',
        description: 'Step\'s description 1',
        status: 'Status 1',
        code: 'Code 1',
        order: 'Order 1'
      },
      {
        title: 'Step 2',
      }
    ]
  });

  this.render(hbs`{{pipeline-view pipeline=pipeline}}`);

  const result = this.$().text();

  assert.ok(result.match(/Some pipeline/), 'can\'t find title');
  assert.ok(result.match(/Some description/), 'can\'t find description');
  assert.ok(result.match(/Step 1/), 'can\'t find step 1');
  assert.ok(result.match(/Step's description 1/),
    'can\'t find steps\' 1 description');
  assert.ok(result.match(/Status 1/), 'can\'t find steps\' 1 status');
  assert.ok(result.match(/Code 1/), 'can\'t find steps\' 1 code');
  assert.ok(result.match(/Order 1/), 'can\'t find steps\' 1 order');
  assert.ok(result.match(/Step 2/), 'can\'t find steps 2');
  assert.ok(result.match(/No description/),
    'can\'t find steps\' 2 description');
  assert.ok(result.match(/No status/), 'can\'t find steps\' 2 status');
  assert.ok(result.match(/No code/), 'can\'t find steps\' 2 code');
  assert.ok(result.match(/No order/), 'can\'t find steps\' 2 order');
});

test('it renders empty values', function(assert) {
  this.render(hbs`{{pipeline-view}}`);

  const result = this.$().text();

  assert.ok(result.match(/No title/), 'can\'t find title');
  assert.ok(result.match(/No description/), 'can\'t find description');
  assert.ok(result.match(/No steps/), 'can\'t find steps');
});
