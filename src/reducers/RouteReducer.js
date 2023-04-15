export const initialState={
    prev:"skills",
    next:"Contact"
}
export const reducer=(state,action)=>{
        switch(action.page){
            case "home":
            return action.payload;
            
            case "contact":
                return action.payload;
            case "about":
                return action.payload;
            default:
                return state;
        }
        
}