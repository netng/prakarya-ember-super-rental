import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    console.log('about routes');
  }
}
