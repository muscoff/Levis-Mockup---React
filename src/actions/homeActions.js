import { BANNER, LOGO, CATEGORY, HAPPENING, AFTERPAY, MODELS, SUMMER, SHIRT, CUFF, BRAND, 
    PRODUCT, ORDER, SINGLE_ORDER, SINGLE_CUSTOMER, UPDATE_CONTROL, ADD_BRAND, DELETE_BRAND, 
    EDIT_BRAND, ADD_CATEGORY, DELETE_CATEGORY, SINGLE_CATEGORY, EDIT_CATEGORY, UPLOAD_LOGO, 
    UPDATE_LOGO, ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, SINGLE_PRODUCT, FEATURED, PRODUCT_IMG, 
    DELETE_IMG, UPDATE_FACE, LENGTH, SIZE, BY_SIZE, BY_LENGTH, BY_PRICE, PRODUCT_SEARCH_CAT, PRODUCT_SEARCH_NAME, PAY } from './types';



// SETTINGS API
export const logo = () => dispatch => {
    fetch('http://localhost/digishop/react/home/control.php')
    .then(response=>response.json())
    .then(data=>dispatch({
        type: LOGO,
        payload: data
    }));
}

export const upload_logo = (data) => dispatch => {
    let formData = new FormData();
    formData.append('image', data.image);
    fetch('http://localhost/digishop/react/api/control.php', {method: "POST", body: formData})
    .then(response=>response.json())
    .then(data=>dispatch({
        type: UPLOAD_LOGO,
        payload: data
    }));
}

export const update_logo = (data) => dispatch => {
    let formData = new FormData();
    formData.append('image', data.image);
    formData.append('id', data.id);
    fetch('http://localhost/digishop/react/api/edit_control.php', {method: "POST", body: formData})
    .then(response=>response.json())
    .then(data=>dispatch({
        type: UPDATE_LOGO,
        payload: data
    }));
}

export const update_control = (data) => dispatch => {
    fetch('http://localhost/digishop/react/home/update_control.php?'+data.position+'='+data.value+'&id='+data.id)
    .then(response=>response.json())
    .then(data=>dispatch({
        type: UPDATE_CONTROL,
        payload: data
    }));
}

// End of SETTINGS API

// Brand API

export const brand = () => dispatch => {
    fetch('http://localhost/digishop/react/home/brand.php')
    .then(response=>response.json())
    .then(data=>dispatch({
        type: BRAND,
        payload: data
    }));
}

export const addbrand = (obj) => dispatch => {
    let formData = new FormData();
    formData.append('brand', obj.brand);
    fetch('http://localhost/digishop/react/api/brand.php',{
        method: 'POST',
        body: formData
    })
    .then(response=>response.json())
    .then(data=>dispatch({
        type: ADD_BRAND,
        payload: data
    }));
}

export const editbrand = (obj) => dispatch => {
    let formData = new FormData();
    formData.append('brand', obj.brand);
    formData.append('id', obj.id);
    fetch('http://localhost/digishop/react/api/brand.php',{
        method: 'POST',
        body: formData
    })
    .then(response=>response.json())
    .then(data=>dispatch({
        type: EDIT_BRAND,
        payload: data
    }));
}

export const deletebrand = id => dispatch => {
    fetch('http://localhost/digishop/react/api/brand.php?id='+id)
    .then(response=>response.json())
    .then(data=>dispatch({
        type: DELETE_BRAND,
        payload: data
    }));
}

// End of Brand API

// Category API

export const category = () => dispatch => {
    fetch('http://localhost/digishop/react/home/category.php')
    .then(response=>response.json())
    .then(data=>dispatch({
        type: CATEGORY,
        payload: data
    }));
}

export const singlecategory = id => dispatch => {
    fetch('http://localhost/digishop/react/home/singlecategory.php?id='+id)
    .then(response=>response.json())
    .then(data=>dispatch({
        type: SINGLE_CATEGORY,
        payload: data
    }));
}

export const addcategory = data => dispatch => {
    let formData = new FormData();
    formData.append('category', data.category);
    formData.append('parent', data.parent);
    fetch('http://localhost/digishop/react/api/category.php',{
        method: 'POST',
        body: formData
    })
    .then(response=>response.json())
    .then(data=>dispatch({
        type: ADD_CATEGORY,
        payload: data
    }));
}

export const editcategory = data => dispatch => {
    let formData = new FormData();
    formData.append('category', data.category);
    formData.append('parent', data.parent);
    formData.append('id', data.id);
    fetch('http://localhost/digishop/react/api/category.php',{
        method: 'POST',
        body: formData
    })
    .then(response=>response.json())
    .then(data=>dispatch({
        type: EDIT_CATEGORY,
        payload: data
    }));
}

export const deletecategory = id => dispatch => {
    fetch('http://localhost/digishop/react/api/category.php?id='+id)
    .then(response=>response.json())
    .then(data=>dispatch({
        type: DELETE_CATEGORY,
        payload: data
    }));
}

// End of Category API

// PRODUCT API

export const product = () => dispatch => {
    fetch('http://localhost/digishop/react/home/product.php')
    .then(response=>response.json())
    .then(data=>dispatch({
        type: PRODUCT,
        payload: data
    }));
}

export const product_search_cat = id => dispatch => {
    fetch('http://localhost/digishop/react/api/product_search.php?cat='+id)
    .then(response=>response.json())
    .then(data=>dispatch({
        type: PRODUCT_SEARCH_CAT,
        payload: data
    }));
}

export const product_search_name = search => dispatch => {
    fetch('http://localhost/digishop/react/api/product_search.php?search='+search)
    .then(response=>response.json())
    .then(data=>dispatch({
        type: PRODUCT_SEARCH_NAME,
        payload: data
    }));
}

export const productImage = data => dispatch => {
    let formData = new FormData();
    formData.append('id', data.id);
    let len = data.image.length;
    for(let i=0; i<len; i++){
        let file = data.image[i];
        formData.append('images[]', file);
    }
    fetch('http://localhost/digishop/react/api/update_images.php', {method:"POST", body:formData})
    .then(response=>response.json())
    .then(data=>dispatch({
        type: PRODUCT_IMG,
        payload: data
    }));
}

export const update_face = data => dispatch => {
    fetch('http://localhost/digishop/react/api/update_images.php?productId='+data.id+'&img='+data.image)
    .then(response=>response.json())
    .then(response=>dispatch({
        type: UPDATE_FACE,
        payload: response
    }));
}

export const delete_single_img = data => dispatch => {
    fetch('http://localhost/digishop/react/api/update_images.php?id='+data.id+'&img='+data.image)
    .then(response=>response.json())
    .then(response=>dispatch({
        type: DELETE_IMG,
        payload: response
    }));
}

export const addproduct = data => dispatch => {
    let formData = new FormData();
    let pic = data.image.length;
    for(let i = 0; i < pic; i++){
        let file = data.image[i];
        formData.append('images[]', file);
    }
    formData.append('title', data.title);
    formData.append('brand', data.brand);
    formData.append('parent', data.parent);
    formData.append('child', data.child);
    formData.append('price', data.price);
    formData.append('sizes', data.sizes);
    formData.append('description', data.description);
    fetch('http://localhost/digishop/react/api/product.php', {method: 'POST', body: formData})
    .then(response=>response.json())
    .then(data=>dispatch({
        type: ADD_PRODUCT,
        payload: data
    }));
}

export const editproduct = data => dispatch => {
    let formData = new FormData();
    formData.append('id', data.id);
    formData.append('title', data.title);
    formData.append('brand', data.brand);
    formData.append('price', data.price);
    formData.append('parent', data.parent);
    formData.append('child', data.child);
    formData.append('sizes', data.sizes);
    formData.append('description', data.description);
    fetch('http://localhost/digishop/react/api/product.php', {method: 'POST', body: formData})
    .then(response=>response.json())
    .then(data=>dispatch({
        type: EDIT_PRODUCT,
        payload: data
    }));
}

export const singleproduct = id => dispatch => {
    const url = 'http://localhost/digishop/react/api/product.php?single='+id;
    fetch(url)
    .then(response=>response.json())
    .then(response=>dispatch({
        type: SINGLE_PRODUCT,
        payload: response
    }));
}

export const featured = data => dispatch => {
    const url = 'http://localhost/digishop/react/api/product.php?featured='+data.featured+'&id='+data.id;
    fetch(url)
    .then(response=>response.json())
    .then(response=>dispatch({
        type: FEATURED,
        payload: response
    }));
}

export const deleteproduct = id => dispatch => {
    const url = 'http://localhost/digishop/react/api/product.php?id='+id;
    fetch(url)
    .then(response=>response.json())
    .then(response=>dispatch({
        type: DELETE_PRODUCT,
        payload: response
    }));
}

export const size = () => dispatch => {
    const url = 'http://localhost/digishop/react/api/sizes.php?size';
    fetch(url)
    .then(response=>response.json())
    .then(response=>dispatch({
        type: SIZE,
        payload: response
    }));
}

export const length = () => dispatch => {
    const url = 'http://localhost/digishop/react/api/sizes.php?length';
    fetch(url)
    .then(response=>response.json())
    .then(response=>dispatch({
        type: LENGTH,
        payload: response
    }));
}

export const by_size = data => dispatch => {
    const url = 'http://localhost/digishop/react/api/product_by.php?size='+data.size;
    fetch(url)
    .then(response=>response.json())
    .then(response=>dispatch({
        type: BY_SIZE,
        payload: response
    }));
}

export const by_length = data => dispatch => {
    const url = 'http://localhost/digishop/react/api/product_by.php?length='+data.length;
    fetch(url)
    .then(response=>response.json())
    .then(response=>dispatch({
        type: BY_LENGTH,
        payload: response
    }));
}

export const by_price = data => dispatch => {
    const url = 'http://localhost/digishop/react/api/product_by.php?price='+data.price;
    fetch(url)
    .then(response=>response.json())
    .then(response=>dispatch({
        type: BY_PRICE,
        payload: response
    }));
}

// End of PRODUCT API

// Start of ORDER API

export const order = () => dispatch => {
    fetch('http://localhost/digishop/react/home/order.php')
    .then(response=>response.json())
    .then(data=>dispatch({
        type: ORDER,
        payload: data
    }));
}

export const singleorder = (data) => dispatch => {
    fetch('http://localhost/digishop/react/home/singleorder.php?id='+data.id+'&email='+data.email)
    .then(response=>response.json())
    .then(data=>{
        let cart = data.cart;
        dispatch({
            type: SINGLE_ORDER,
            payload: cart
        })
    });
}

export const single_customer = (email) => dispatch => {
    fetch('http://localhost/digishop/react/home/customer_acc.php?email='+email)
    .then(response=>response.json())
    .then(data=>dispatch({
        type: SINGLE_CUSTOMER,
        payload: data
    }));
}

// End of ORDER API


// FRONTEND LOOK API

export const banner = () => dispatch => {
    fetch('http://localhost/digishop/react/home/banner.php')
    .then(response=>response.json())
    .then(data=>dispatch({
        type: BANNER,
        payload: data
    }));
}

export const happening = () => dispatch => {
    fetch('http://localhost/digishop/react/home/happening.php')
    .then(response=>response.json())
    .then(data=>dispatch({
        type: HAPPENING,
        payload: data
    }));
}

export const afterpay = () => dispatch => {
    fetch('http://localhost/digishop/react/home/afterpay.php')
    .then(response=>response.json())
    .then(data=>dispatch({
        type: AFTERPAY,
        payload: data
    }));
}

export const threemodels = () => dispatch => {
    fetch('http://localhost/digishop/react/home/threemodels.php')
    .then(response=>response.json())
    .then(data=>{
        let content = data.content;
        dispatch({
            type: MODELS,
            payload: content
        })
    });
}

export const summer = () => dispatch => {
    fetch('http://localhost/digishop/react/home/summer.php')
    .then(response=>response.json())
    .then(data=>dispatch({
        type: SUMMER,
        payload: data
    }));
}

export const shirt = () => dispatch => {
    fetch('http://localhost/digishop/react/home/shirt.php')
    .then(response=>response.json())
    .then(data=>dispatch({
        type: SHIRT,
        payload: data
    }));
}

export const cuff = () => dispatch => {
    fetch('http://localhost/digishop/react/home/cuff.php')
    .then(response=>response.json())
    .then(data=>dispatch({
        type: CUFF,
        payload: data
    }));
}

export const pay = data => dispatch => {
    let formData = new FormData();
    for(let i=0; i<data.local.length; i++){
        formData.append('id[]', data.local[i].id);
        formData.append('title[]', data.local[i].title);
        formData.append('size[]', data.local[i].size);
        formData.append('quantity[]', data.local[i].quantity);
        formData.append('length[]', data.local[i].length);
        formData.append('image[]', data.local[i].image);
    }
    formData.append('shipping', data.shipping);
    formData.append('email', data.email);
    fetch('http://localhost/digishop/react/api/pay.php', 
    {
    method: 'POST',  
    body: formData
    })
    .then(response=>response.json())
    .then(response=>dispatch({
        type: PAY,
        payload: response
    }));
}