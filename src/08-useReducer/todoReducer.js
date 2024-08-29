
export const todoReducer = (initialState,action)=>{

    switch (action.type) {
        case 'abc':
            
            throw new Error("action = abc no esta implementado");
            
    
        default:
            return initialState;
    }

}