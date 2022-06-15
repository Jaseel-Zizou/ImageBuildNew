import axios from "axios"
import Config from "../../Config"

async function getToken() {
  const accessToken = localStorage.getItem("accessToken");
  const headers = {
    "Authorization": accessToken
  }
  const response = await axios.get(`${Config.hostName}/frame/get-token`, { headers })
  return response.data.data[0].token
}

// Retrieves metadata or "assertions" using the generated SAT.
async function getUserAssertions(token: any) {
  const result = await axios({
    url:
      "https://cpanel-backend-prod.frame.nutanix.com/api/rest/v1/me/assertions",
    headers: { Authorization: `Bearer ${token}` },

  });
  return result.data;
}

// Run the script.
export async function mainServiceRequest() {
  try {
    const satToken = await getToken();
    if (satToken !== undefined) {
      const metadata = await getUserAssertions(satToken);
      return ({ metadata, satToken });
    }
  } catch (err) {
    console.error(err);
  }
}