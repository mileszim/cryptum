import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  name: DS.attr('string'),

  publicKey: DS.belongsTo('key'),
  privateKey: DS.belongsTo('key'),

  createdAt: DS.attr('date', {
    defaultValue() { return new Date(); }
  })
});
