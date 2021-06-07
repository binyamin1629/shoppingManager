import * as actionTypes from './shoppingTyps'

export const addShoppingItem=(title, description)=>{
    //title==''&&description==''?null: //callback()//callback

        return{
            type:actionTypes.add_shoppingItem,
            payload: { title, description, date:'' } ,
            
        }
}


export const deleteShoppingItem=(id)=>{

    return{
        type:actionTypes.delete_ShoppingItem,
        payload:id
    }

}

export const updtaeShoppingItem=(id, title, description)=>{
        
        return{
            type:actionTypes.updtae_ShoppingItem,
            payload: { id: id, title: title, description: description, date:'' } 
        }
}

