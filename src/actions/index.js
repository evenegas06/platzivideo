// Describir la información que vamos a tener 
// Pasar un objeto que vamos a tener disponible dentro de nuestro reducer, el 
// cual va a tomar la acción que estamos ejecutando para evaluar como guardarlo dentro de nuestro estado 

// Acción para añadir elementos a favoritos
export const setFavorite = (payload) => {
    return {
        type: 'SET_FAVORITE',
        payload,
    };
};

// Acción parqa eliminar un elemento de favoritos 
export const deleteFavorite = (payload) => {
    return {
        type: 'DELETE_FAVORITE',
        payload,
    };
};

export const loginRequest = (payload) => {
    return {
        type: 'LOGIN_REQUEST',
        payload,
    };
};

export const logoutRequest = (payload) => {
    return {
        type: 'LOGOUT_REQUEST',
        payload,
    };
};

export const registerRequest = (payload) => {
    return {
        type: 'REGISTER_REQUEST',
        payload,
    };
};

export const getVideoSource = (payload) => {
    return {
        type: 'GET_VIDEO_SOURCE',
        payload,
    };
};