export const apiMiddleware = (store) => (next) => (action) =>{
    console.log("state: ", store)
    console.log("next: ", next)
    console.log("action: ", action)
    next(action)
}