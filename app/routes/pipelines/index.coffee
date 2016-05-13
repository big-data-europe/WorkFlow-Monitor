`import Ember from 'ember'`

PipelinesIndexRoute = Ember.Route.extend
  model: ->
    @store.query 'pipeline', {
      page:
        size: 10000
      sort: 'title'
    }

`export default PipelinesIndexRoute`
