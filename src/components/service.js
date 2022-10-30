import axios from "axios";

const url = 'http://localhost:3001/persons'

export const getData = async () => {
         const request = 
         axios
         .get(url)
         const response = await request;
  return response.data;
}
    
export const postData = async (newobject) => {
         const request = 
         axios
         .post(url, newobject)
         const response = await request;
  return response.data;
}            

export const change = async (id , newObject) => {     
         const request =  axios.put(`${url}/${id}`, newObject)           
          const response = await request;
  return response.data;
        }         
       
export const deleteContact = async id => {
         const request =
         axios
         .delete(`${url}/${id}`)
          const response = await request;
  return response.data;
}  