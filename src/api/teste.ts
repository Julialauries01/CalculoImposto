import config from '@/api/config'

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
   console.log('áqui') 
   try {
     const res = await config(`/${categoria}/${id}`)    
     if( res ){
       return res.data
     }
   } catch (error) {
     console.log(error)
 
   }
 }

export { getItems, fetchProductData }