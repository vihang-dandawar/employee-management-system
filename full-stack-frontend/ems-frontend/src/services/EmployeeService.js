import axios from 'axios';
const REST_API_BASE_URL="http://localhost:8080/api/employees"

export const GetEmployeeList=()=>{
    return axios.get(REST_API_BASE_URL)
}

export const CreateEmployee=(employee)=>{
    return axios.post(REST_API_BASE_URL,employee)
}

export const GetEmployee=(id)=>{
  return axios.get(`${REST_API_BASE_URL}/${id}`);
}

export const updateEmployee=(id,employee)=>{
 return axios.put(`${REST_API_BASE_URL}/${id}`,employee); 
}

export const DeleteEmployee=(id)=>{
    return axios.delete(`${REST_API_BASE_URL}/${id}`)
}

export default GetEmployeeList