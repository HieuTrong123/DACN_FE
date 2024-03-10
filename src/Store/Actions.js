export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export function login(payload) {
    return {
        type: 'LOGIN',
        payload
    }
}
