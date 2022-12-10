import axios from 'axios';

const URL = 'https://compserver.onrender.com/compare/data';

export const getalldata=async ()=>{
    try{
       return await axios.get(`${URL}`);
    }catch(error){
        console.log('Eror while calling getUsers API',error)
    }
    
}
export const deleteUser=async (id)=>{
    try{
        return await axios.delete(`${URL}/${id}`);

    }catch(error){
        console.log('Error while calling deleteUser')
    }

}