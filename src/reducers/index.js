const reducer = (state, action)=>{
    switch (action.type){
        case 'SET_FAVORITE':
            if ( state.myList.filter((items) => items.id === action.payload.id).length === 0) {
				return {
					...state,
					myList: [...state.myList, action.payload],
				};
			} else {
				return {
					...state,
				};
			}
        case 'DELETE_FAVORITE':
            return{
                ...state,
                myList:state.myList.filter(items => items.id !== action.payload )
            }
        case 'LOGIN_REQUEST':
            return{
                ...state,
                user:action.payload,
            }
        case 'LOGOUT_REQUEST':
            return{
                ...state,
                user:action.payload,
            }
        case 'REGISTER_REQUEST':
            return{
                ...state,
                user:action.payload,
            }
        case 'GET_VIDEO_SOURCE':
            return{
                ...state,
                playing: state.trends.find(item => item.id === Number(action.payload))
                || state.original.find(item => item.id === Number(action.payload))
                ||[]
            }
            case 'VIDEO_SEARCH':
            return {
                ...state,
                videoSearched: state.trends.find(video => video.title.toLowerCase() === action.payload.trim().toLowerCase())
                || state.originals.find(video => video.title.toLowerCase() === action.payload.trim().toLowerCase())
                || {}
            }
        default:
            return state;
    }
}

export default reducer;