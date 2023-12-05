import config from '@/api/config'
import { IProductsDTO } from '@/dtos/IProductsDTO'
import axios from  'axios'

async function getItems(category:string){
   
   try {
    const res = await config.get(category)
    return res
      
   }
   catch (erro){
      console.log(erro)
   }
}

async function fetchProductData(categoria: string , id: string) {
   
   try {
     const res = await config(`/${categoria}/${id}`)    
     if( res ){
       return res.data
     }
   } catch (error) {
     console.log(error)
 
   }
  }

  async function deleteItem(categoria: string, id: string) {
    
    try {
       const res = await axios.delete(`/api/${categoria}/${id}`)
       res && console.log(res.data)
    }
    catch(error){
      console.log(error)
    }
    
  }

  async function editProduct(body: IProductsDTO ) {
    console.log(body)
    try {
      const res = await axios.put(`/api/${body.categoria}/editar/1`, body)
      if (res) {
        console.log('caiu aqui') 
        return res.data
      }
    }
    catch (error){
      console.log('caiu 2 no erro')
    }
  }

  async function addProduct(body: any) {
    try {
      const res = await axios.post(`/api/${body.categoria}/add`, body)
      if(res){
        console.log('deu bom') 
        return 
      } 
    }
    catch( error){
      console.log(error)
    }
  }

  
export { getItems, fetchProductData, deleteItem, editProduct, addProduct }