import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import OrderViewControl from '../order/order.vc';
import UserRepository from '../../repositories/user/user.repo';
import ProductsService from '../../services/products/products.svc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: contexts.IHome = {
    products: <Array<models.IProduct>>[]
};

navigatedTo(): void {
    this.productsService.getProducts().then((products) => {
        this.context.products = products;
    });
}
    canNavigateTo(): boolean {
        if (this.userRepository.userid === 0) {
            this.navigator.navigate('login-vc');
            return false;
        }
    }
    constructor(private userRepository: UserRepository, private productsService: ProductsService) {
        super();
    }
    order(id: number): void {
    this.navigator.navigate(OrderViewControl, { parameters: { id: id } });
}
}

register.viewControl('home-vc', HomeViewControl, [UserRepository, ProductsService]);
