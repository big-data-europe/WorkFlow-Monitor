`import Ember from 'ember'`
`import config from './config/environment'`

Router = Ember.Router.extend
  location: config.locationType

Router.map ->
  @route 'pipelines', ->
    @route 'index'
    @route 'steps', { path: '/:pipeline_id/steps' }, ->
      @route 'index'

`export default Router`
