import axios from 'axios'
import Config from "../../Config"
const CREDENTIALS_KEY = 'cluster_credentials';

export const getCluster = async () => {
  const accessToken = localStorage.getItem("accessToken");
  const headers = {
    "Authorization": accessToken
  }
  const response = await axios.get(`${Config.hostName}/cluster/get-details`, { headers })
  const credentials = response.data.data[0].clusters.nx;
  if (credentials.cluster !== undefined) {
    localStorage.setItem(CREDENTIALS_KEY, JSON.stringify(credentials));
  } else {
    console.log(
      `No credentials found, instead got: ${JSON.stringify(credentials)}`
    );
  }
};

export const getClusterCredentials = () => {
  return localStorage.getItem(CREDENTIALS_KEY);
};

export const clearClusterCredentials = () => {
  return localStorage.removeItem(CREDENTIALS_KEY);
};

export const checkClusterStatus = async () => {
  const credentials = getClusterCredentials();
  if (!credentials) {
    throw new Error('No credentials found. Expected cluster credentials');
  } else {
    const { requestId } = JSON.parse(credentials).cluster;
    return 'RUNNING';
  }
};
