import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  number: DS.attr('number'),
  timestamp: DS.attr('date', {
    defaultValue() { return new Date(); }
  }),

  creator: DS.belongsTo('user'),
  recipient: DS.belongsTo('user')
});
