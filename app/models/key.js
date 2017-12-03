import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  kind: DS.attr('string', {
    defaultValue() { return 'public'; }
  }),
  createdAt: DS.attr('date', {
    defaultValue() { return new Date(); }
  }),

  user: DS.belongsTo('user'),
  conversation: DS.belongsTo('conversation')
});
