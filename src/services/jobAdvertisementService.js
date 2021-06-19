import axios from 'axios'

export default class JobAdvertisementService{
    
getActiveJobPostings(){
    return axios.get("http://localhost:8080/api/jobAdvertisements/getActiveJobPostings");
}

 getById(id){
    return axios.get("http://localhost:8080/api/jobAdvertisements/getById?id=" + id);
 }
}