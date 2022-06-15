import axios from "axios"
import Config from '../Config';

export const getIp = async() => {
    const response = await axios.get(`${Config.hostName}/misc/getIp`)
    const data = response.data
    return data;
}

export const canAccessFrameDirectly = async() => {
    const bool = String(document.referrer).includes(Config.NX_IP)
    return bool;
}