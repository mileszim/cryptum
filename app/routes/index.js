import Route from '@ember/routing/route';

export default Route.extend({
  titleToken: 'Home',

  model() {
    return this.get('store').findAll('message');
  }
});
