import axios from 'axios'

const ACCOUNT_DETAIL = 'http://localhost:8080/api/v1/payment/wallet'

class PaymentService{
    getDetail(params){
        return axios.get(ACCOUNT_DETAIL+`/?userId=${params}`)
    }

}

export default new PaymentService()