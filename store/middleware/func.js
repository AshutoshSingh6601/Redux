export const func = ({dispatch}) => (next) => (action) =>{
    if(typeof action === 'function'){
        action(dispatch)
    }
    else{
        next(action)
    }
}