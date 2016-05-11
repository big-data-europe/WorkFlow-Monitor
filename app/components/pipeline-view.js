import Ember from 'ember';

export default Ember.Component.extend({
  title: Ember.computed('title', function() {
    return !!this.get('pipeline.title') ? this.get('pipeline.title') : 'No title';
  })
});
