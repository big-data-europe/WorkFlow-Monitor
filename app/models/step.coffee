`import Model from 'ember-data/model'`
`import attr from 'ember-data/attr'`
`import { belongsTo } from 'ember-data/relationships'`
`import HasManyQuery from 'ember-data-has-many-query'`

Step = Model.extend HasManyQuery.ModelMixin, 
  title: attr()
  description: attr()
  code: attr()
  status: attr()
  order: attr('number')

  pipeline: belongsTo('pipeline')

`export default Step`
