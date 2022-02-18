import axios from "axios";

const URL_PRODUCTS = "http://localhost:8081/api/v1/cart";
const access_token = "qwerty";
class ProductService {

    getCart(){
        return axios.get(URL_PRODUCTS+ `/?access_token=${access_token}`,{
            params: access_token,
        });
    }
    addToCart(body){
        return axios.post(URL_PRODUCTS + "/add" + `?access_token=${access_token}`, body);
    }
    remove(id){
        return axios.delete(URL_PRODUCTS + "/remove" + `?access_token=${access_token}`  + `&productId=${id}`)
    }
    clear(){
        return axios.delete(URL_PRODUCTS + "/clear"+ `?access_token=${access_token}`)
    }
    submitOrder(body){
        return axios.post(URL_PRODUCTS + "/submitOrder" + `?access_token=${access_token}`,body)
    }

}

export default new ProductService();