`import Ember from 'ember'`

PipelinesStepsIndexRoute = Ember.Route.extend
  model: ->
    @modelFor('pipelines.steps').get('steps')

`export default PipelinesStepsIndexRoute`
