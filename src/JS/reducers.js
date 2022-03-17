
import {ADDITION,DELETE, DONE, EDIT} from "./constants"
const initialState ={
    
    text:[
    
      
    ]
    
}

const reducers = (state = initialState, actions) => {
    switch (actions.type) {
        
            case ADDITION:
                return  {...state, text :[...state.text,{txt :actions.payload.texte,id:actions.payload.id,IsDone:actions.payload.IsDone}]} 
                
            case DELETE:
                return  {...state, text :state.text.filter(el=>el.id !== actions.payload.id)} 

            case EDIT:
                return  {...state, text :state.text.map(el=>el.id === actions.payload.id?{...el,txt:actions.payload.texte}:el)}
                case DONE:
                    return  {...state, text :state.text.map(el=>el.id === actions.payload.id?{...el,IsDone:!el.IsDone}:el)}      
                 
            default:
                return state
    }
 
}
export default reducers