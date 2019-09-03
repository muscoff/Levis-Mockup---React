import { BANNER, HAPPENING, AFTERPAY, MODELS, SUMMER, SHIRT, CUFF, LOGO, 
    CATEGORY, BRAND, PRODUCT, ORDER, SINGLE_ORDER, SINGLE_CUSTOMER, UPDATE_CONTROL, 
    ADD_BRAND, DELETE_BRAND, EDIT_BRAND, ADD_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY, 
    SINGLE_CATEGORY, UPLOAD_LOGO, UPDATE_LOGO, ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, 
    SINGLE_PRODUCT, FEATURED, PRODUCT_IMG, DELETE_IMG, UPDATE_FACE, LENGTH, SIZE, BY_SIZE, 
    BY_LENGTH, BY_PRICE, PRODUCT_SEARCH_CAT, PRODUCT_SEARCH_NAME, PAY } from '../actions/types';

const initialState = {
    banner: [],
    happening: [],
    afterpay: [],
    threemodels: [],
    summer: [],
    shirt: [],
    cuff: [],
    logo: [],
    category: [],
    brand:[],
    product: [],
    order: [],
    single_order: [],
    single_customer: {},
    container: [],
    response: {},
    product_response: {},
    single_product: {},
    product_image: {},
    featured: {},
    res:{},
    length: [],
    size:[],
    pay: {},
}

export default function(state = initialState, action){
    switch(action.type){
        case BANNER:
            return {
                ...state,
                banner : action.payload
            }
        case HAPPENING:
            return {
                ...state,
                happening : action.payload
            }
        case AFTERPAY:
            return {
                ...state,
                afterpay : action.payload
            }
        case MODELS:
            return {
                ...state,
                threemodels : action.payload
            }
        case SUMMER:
            return {
                ...state,
                summer : action.payload
            }
        case SHIRT:
            return {
                ...state,
                shirt : action.payload
            }
        case CUFF:
            return {
                ...state,
                cuff : action.payload
            }
        case LOGO:
            return {
                ...state,
                logo: action.payload
            }
        case UPDATE_CONTROL:
            return {
                ...state,
                response: action.payload
            }
        case UPLOAD_LOGO:
            return {
                ...state,
                response: action.payload
            }
        case UPDATE_LOGO:
            return {
                ...state,
                response: action.payload
            }
        case CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case BRAND:
            return {
                ...state,
                brand: action.payload
            }
        case PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case PRODUCT_SEARCH_CAT:
            return {
                ...state,
                product: action.payload
            }
        case PRODUCT_SEARCH_NAME:
            return {
                ...state,
                product: action.payload
            }
        case PRODUCT_IMG:
            return {
                ...state,
                product_image: action.payload
            }
        case UPDATE_FACE:
            return {
                ...state,
                product_image: action.payload
            }
        case DELETE_IMG:
            return {
                ...state,
                product_image: action.payload
            }
        case FEATURED:
            return {
                ...state,
                featured: action.payload
            }
        case ADD_PRODUCT:
            return {
                ...state,
                product_response: action.payload
            }
        case SINGLE_PRODUCT:
            return {
                ...state,
                single_product: action.payload
            }
        case EDIT_PRODUCT:
            return {
                ...state,
                product_response: action.payload
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                product_response: action.payload
            }
        case BY_SIZE:
            return {
                ...state,
                product: action.payload
            }
        case BY_LENGTH:
            return {
                ...state,
                product: action.payload
            }
        case BY_PRICE:
            return {
                ...state,
                product: action.payload
            }
        case SIZE:
            return {
                ...state,
                size: action.payload
            }
        case LENGTH:
            return {
                ...state,
                length: action.payload
            }
        case ORDER:
            return {
                ...state,
                order: action.payload
            }
        case SINGLE_ORDER:
            return {
                ...state,
                single_order: action.payload
            }
        case SINGLE_CUSTOMER:
            return {
                ...state,
                single_customer: action.payload
            }
        case ADD_BRAND:
            return {
                ...state,
                response: action.payload
            }
        case EDIT_BRAND:
            return {
                ...state,
                response: action.payload
            }
        case DELETE_BRAND:
            return {
                ...state,
                response: action.payload
            }
        case ADD_CATEGORY:
            return {
                ...state,
                response: action.payload
            }
        case SINGLE_CATEGORY:
            return {
                ...state,
                container: action.payload
            }
        case EDIT_CATEGORY:
            return {
                ...state,
                res: action.payload
            }
        case DELETE_CATEGORY:
            return {
                ...state,
                response: action.payload
            }
        case PAY:
            return {
                ...state,
                pay: action.payload
            }
        default:
            return state;
    }
}