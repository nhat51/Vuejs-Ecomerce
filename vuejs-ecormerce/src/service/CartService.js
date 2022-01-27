import axios from "axios";

const URL_PRODUCTS = "http://localhost:8080/api/v1/cart";
const access_token = "qwerty";
class ProductService {

    getCart(){
        return axios.get(URL_PRODUCTS+ `/?access_token=${access_token}`,{
            params: access_token,
        });
    }
    addToCart(body){
        return axios.post(URL_PRODUCTS + "/add/" + `/?access_token=${access_token}`, {
            params: body}
        );
    }
    remove(){
        return axios.put(URL_PRODUCTS + "/update/" + `/?access_token=${access_token}`,access_token)
    }
    clear(){
        return axios.delete(URL_PRODUCTS + "/clear/"+ `/?access_token=${access_token}`)
    }


}

export default new ProductService();