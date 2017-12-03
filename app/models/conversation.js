import DS from 'ember-data';

export default DS.Model.extend({
  messages: DS.hasMany('message'),
  users: DS.hasMany('user'),

  publicKey: DS.belongsTo('key'),
  messageCount: DS.attr('number', {
    defaultValue() { return 0; }
  }),

  numUsers: this.get('users.[]').get('length')
});
