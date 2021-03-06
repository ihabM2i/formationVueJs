import axios from "axios"

const urlApi =  "http://localhost:5000/"
export const products = [
    {id:1, title : 'product 1', description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", price : 10, image : 'https://picsum.photos/id/238/200/200'},
    {id:2, title : 'product 2',description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", price : 25, image : 'https://picsum.photos/id/239/200/200'},
    {id:3, title : 'product 3',description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", price : 300, image : 'https://picsum.photos/id/240/200/200'},
    {id:4, title : 'product 4',description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", price : 40, image : 'https://picsum.photos/id/241/200/200'},
  ]


export const getProducts = () => {
  return axios.get(urlApi+'product')
}


// export const getProduct = (id) => {
//     const productFound = products.find(p=>p.id == id)
//     return {...productFound}
// }

export const getProduct = (id) => {
  return axios.get(urlApi +'product/'+id)
}

// export const searchProduct  = (title) => {
//   if(title == undefined || title == '') {
//     return products
//   }
//   else {
//     return products.filter(p=>p.title.includes(title))
//   }
// }

export const searchProducts = (search) => {
  return axios.get(urlApi + "search/"+search)
}