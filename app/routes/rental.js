import Route from '@ember/routing/route';
import { service } from '@ember/service';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default class RentalRoute extends Route {
  @service store;

  async model(params) {
    return this.store.findRecord('rental', params.rental_id);
  }
}
