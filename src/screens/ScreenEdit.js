import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { updtaeShoppingItem } from '../redux/shopping/shoppingActions'
import { connect } from 'react-redux'
import ShoppingForm from '../components/shoppingForm'

const ScreenEdit=({navigation,editItem,shopping_list})=>{
   
    const initialValues=shopping_list.find((item)=>item.id==navigation.getParam('id'))


 
   


    return(
        <View>
            <ShoppingForm initialValues={initialValues} buttonTitle="Update Item" onSubmit={(title,description)=>{
                editItem(navigation.getParam('id'),title,description)
            }}/>
        
    </View>
    )
}

const styles = StyleSheet.create({})

const mapDispatchToProps = (dispatch,ownProps) => {

    return {
        editItem: (id,title, description) => dispatch(updtaeShoppingItem(id,title, description),ownProps.navigation.navigate('Index'))
    }
}

const mapStateToProps = state => {
    return {shopping_list: state.shop.shopping_list }
}


export default connect(mapStateToProps,mapDispatchToProps)(ScreenEdit)