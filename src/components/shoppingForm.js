import React,{useState} from 'react'
import {View,StyleSheet,TextInput,Button} from 'react-native'



const ShoppingForm=({initialValues,onSubmit,buttonTitle})=>{
    console.log(initialValues)

    const [title,setTitle]=useState(initialValues.title)
    const [description,setDescription]=useState(initialValues.description)
    return(
        <View>

        <TextInput
            placeholder="item name..."
            value={title}
            onChangeText={(txt) => setTitle(txt)}
            style={styles.inputItem}
        />
        <TextInput
            placeholder="item description..."
            value={description}
            onChangeText={(txt) => setDescription(txt)}
            style={styles.inputDescription}
        />
        <Button title={buttonTitle}
          onPress={()=>onSubmit(title,description)}

        />
        
    </View>
    )

}

ShoppingForm.defaultProps ={
    initialValues:{
        title:'',
        description:''
    }  
}


const styles = StyleSheet.create({

    inputItem: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        marginBottom: 15,
        margin: 5,
        borderRadius: 15,

    },
    inputDescription: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        marginBottom: 15,
        margin: 5,
        borderRadius: 15,
        height: 150
    }

})

export default ShoppingForm