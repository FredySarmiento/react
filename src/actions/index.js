export const setFavorite = payload=> ({
    type:'SET_FAVORITE',
    payload,
});

/*Primera accion que se le esta mandando a carrucel */

export const deleteFavorite = payload => ({
        type:'DELETE_FAVORITE',
        payload,
    });

export const loginRequest = payload =>({
    type: 'LOGIN_REQUEST',
    payload,
});

export const logoutRequest = payload=>({
    type: 'LOGOUT_REQUEST',
    payload,
});
export const registerRequest = payload =>({
    type:'REGISTER_REQUEST',
    payload,
});

export const getVideoSource = payload =>({
    type:'GET_VIDEO_SOURCE',
    payload,
});
export const videoSearch = payload => ({
    type: 'VIDEO_SEARCH',
    payload
})