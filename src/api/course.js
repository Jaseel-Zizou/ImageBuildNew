import axios from "axios"
import Config from '../Config';

export const getAllCourses = async () => {
  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTM2OTg2MjZlNDBhODMwMDNjMGRjMSIsIm5hbWUiOiJTeWVkIEFiZHVsIiwiZW1haWwiOiJzeWVkLmFiZHVsQG51dGFuaXguY29tIiwiYXBpS2V5IjoiNDRkMTRlNzAtMjA5MC0xMWVjLWI1ZWQtNDllMWFhZmY0NjIzIiwiaWF0IjoxNjQ4MjA0MTExLCJleHAiOjE2Nzk3NjE3MTF9.u86d-PFIyZAner8UrWc7tyy-ueUG0GyH7s8TZkGQvMA";
  const headers = {
    "Authorization": accessToken
  }
  const response = await axios.get(`${Config.hostName}/course`, { headers })
  return response.data.data[0];
}

export const addNewCourse = async (data) => {
  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTM2OTg2MjZlNDBhODMwMDNjMGRjMSIsIm5hbWUiOiJTeWVkIEFiZHVsIiwiZW1haWwiOiJzeWVkLmFiZHVsQG51dGFuaXguY29tIiwiYXBpS2V5IjoiNDRkMTRlNzAtMjA5MC0xMWVjLWI1ZWQtNDllMWFhZmY0NjIzIiwiaWF0IjoxNjQ4MjA0MTExLCJleHAiOjE2Nzk3NjE3MTF9.u86d-PFIyZAner8UrWc7tyy-ueUG0GyH7s8TZkGQvMA";
  const headers = {
    "Authorization": accessToken
  }
  const response = await axios.post(`${Config.hostName}/course`, data  ,{ headers },)
  return response.data.success;
}
