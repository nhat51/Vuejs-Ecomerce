import axios from "axios";

const URL_PRODUCTS = "http://localhost:8081/api/v1/orders";

class OrderService {

    getAll(){
        return axios.get(URL_PRODUCTS);
    }


}

export default new OrderService();