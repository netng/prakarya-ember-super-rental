import Component from "@glimmer/component";

export default class RentalFilterComponents extends Component {
    get results() {
        let { rentals, query } = this.args;

        if (query) {
            rentals = rentals.filter((rental) => rental.title.includes(query));
        }

        return rentals;
    }
}