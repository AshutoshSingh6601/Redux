
export const apiMiddleware = (store) => (next) => (action) =>{
    const {dispatch} = store
    const BASE_URL = 'https://fakestoreapi.com'
    if (action.type === 'api/makeCall'){
        const { url, onLoad, onSuccess, onError } = action.payload
        // next(action)     //--> if we want to see all steps in RTK
        dispatch({type: onLoad})
        fetch(`${BASE_URL}/${url}`)
        .then((res)=>res.json())
        .then((data)=>dispatch({
            type: onSuccess,
            payload: data
        }))
        .catch((err)=>dispatch(onError()))
    } 
    else{
        next(action)
    }
}

export const fetchData = (payload)  => ({type: 'api/makeCall', payload})