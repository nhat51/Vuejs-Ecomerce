import axios from "axios";

const URL_PRODUCTS = "http://localhost:8083/api/v1/categories";

class CategoryService {

    getAll(){
        return axios.get(URL_PRODUCTS, {
        });
    }


}

export default new CategoryService();