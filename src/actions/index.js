export const setFavorite = payload=> ({
    type:'SET_FAVORITE',
    payload,
});

/*Primera accion que se le esta mandando a carrucel */

export const deleteFavorite = payload => ({
        type:'DELETE_FAVORITE',
        payload,
    });