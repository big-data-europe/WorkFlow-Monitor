`import Ember from 'ember'`

PipelinesStepsIndexController = Ember.Controller.extend
  stepSorting: ['order']
  sortedSteps: Ember.computed.sort 'model', 'stepSorting'

`export default PipelinesStepsIndexController`
