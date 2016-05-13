`import Model from 'ember-data/model'`
`import attr from 'ember-data/attr'`
`import { hasMany } from 'ember-data/relationships'`
`import HasManyQuery from 'ember-data-has-many-query'`

Pipeline = Model.extend HasManyQuery.ModelMixin,
  title: attr()
  description: attr()

  steps: hasMany 'step',
    parameters:
      page:
        size: 10000

`export default Pipeline`
