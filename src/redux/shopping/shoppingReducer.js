import * as actionTypes from './shoppingActions'    
import * as actionType from './shoppingTyps'

const initialstate = {
    shopping_list: []
        
 
}
const shoppingReducer = (state = initialstate, action) => {
        
    switch (action.type) {
        
        case actionType.add_shoppingItem:
            if(action.payload.title==''&&action.payload.description==''){
                return state;
            }
            return {
                ...state,
                shopping_list: [
                    ...state.shopping_list,
                    {
                        id: Math.floor(Math.random() * 1000),
                        title: action.payload.title,
                        description: action.payload.description,
                        date: getCurrentDate()
                    },
              

                ]
                
              
            }   
            
        case actionType.delete_ShoppingItem:
                return {
                    ...state,
                    shopping_list:state.shopping_list.filter((shopItem)=>shopItem.id!=action.payload)
                }
           
        case actionType.updtae_ShoppingItem:
            // const shopItem = state.shopping_list.map((item)=>item.id==action.payload.id)
            // console.log(shopItem)
            return {
                  ...state,
                  shopping_list:state.shopping_list.map(item=>item.id==action.payload.id
                    ?{
                        id: action.payload.id,
                        title: action.payload.title,
                        description: action.payload.description,
                        date: getCurrentDate()
                    }
                    :item)
             }  
        
                  
                   

        default:
            return state;
    }

}

const getCurrentDate = () => {

    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    var date = new Date().getDay()
    var month = new Date().getMonth();
    var year = new Date().getFullYear();
    var day = new Date().getDay();

    return days[date] + ' ' + months[month] + ' ' + day + ' ' + year
}



export default shoppingReducer