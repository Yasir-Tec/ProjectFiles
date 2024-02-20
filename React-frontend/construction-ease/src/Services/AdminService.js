import axios from 'axios';

const ADMIN_BASE_RESTAPI_URL = 'http://localhost:8084/admin/';



class AdminService{

  getContractorCount()
  {
    return axios.get(ADMIN_BASE_RESTAPI_URL + 'contractor/count');
  }

  getClientCount()
  {
    return axios.get(ADMIN_BASE_RESTAPI_URL + 'client/count');
  }

  getContractorFeedbackCount()
  {
    return axios.get(ADMIN_BASE_RESTAPI_URL + 'contractorfeedback/count');
  }

  getClientFeedbackCount()
  {
    return axios.get(ADMIN_BASE_RESTAPI_URL + 'clientfeedback/count');
  }



  

}


export default new AdminService();