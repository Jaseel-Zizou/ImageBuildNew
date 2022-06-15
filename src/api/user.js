import axios from "axios"
import Config from '../Config';

export const getUser = async() => {
    const accessToken = localStorage.getItem("accessToken");
    const headers = {
      "Authorization":accessToken
    }
    const response = await axios.get(`${Config.hostName}/user`,{headers})
    return response.data.data[0];
}
