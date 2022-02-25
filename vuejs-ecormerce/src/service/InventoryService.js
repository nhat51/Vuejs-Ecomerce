import axios from "axios";

const URL_PRODUCTS = "http://localhost:8083/api/v1/importExportHistory";

class InventService {

    getAll(){
        return axios.get(URL_PRODUCTS, {
        });
    }


}

export default new InventService();