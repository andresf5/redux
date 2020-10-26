const INITIAL_STATE = {
    datos: []
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'traer_datos':
           return {...state, datos: action.payload} 
        default: return state;
        }
        
}