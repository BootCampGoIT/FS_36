import axios from 'axios';

// const apiKey = "AIzaSyDK33ZGkjBl4Z3AWAKL976rTQrl0k7mQp0";


export const createProduct = (product) => {
    axios.post(`https://test-ed21b.firebaseio.com/products.json`, product)
}

export const getProducts = () => {
    return axios.get(`https://test-ed21b.firebaseio.com/products.json`)
}

