import Route from '@ember/routing/route';

export default Route.extend({
  title(tokens) {
    return (tokens.length ? tokens.reverse().join(' - ') + ' - ' : '') + 'Cryptum';
  },
});
