import Axios from 'axios';

export function getDataForProduct() {
    // return Axios.get(URL,
    // {
    //   withCredentials: true,
    //   headers: {'Authorization': getToken()}
    // }); https://jsonplaceholder.typicode.com/users
   

    return Axios.get('https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json');
}