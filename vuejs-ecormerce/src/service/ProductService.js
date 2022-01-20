import axios from "axios";

const URL_PRODUCTS = "http://localhost:8080/api/v1/products";

class ProductService {

    getAll(params){
        return axios.get(URL_PRODUCTS, {
            params: params
        });
    }
    save(body){
        return axios.post(URL_PRODUCTS + "/save",body);
    }
    detail(id){
        return axios.get(URL_PRODUCTS + "/detail/"+ id)
    }


}

export default new ProductService();