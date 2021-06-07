import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity, TextInput } from 'react-native'
import { addShoppingItem } from '../redux/shopping/shoppingActions'
import { connect } from 'react-redux'
import ShoppingForm from '../components/shoppingForm'

const ScreenCreate = ({navigation, addItem}) => {

    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    return (

        <View>

            <ShoppingForm buttonTitle="Add Item" onSubmit={(title,description)=>{
                addItem(title, description)
            }}/>
        
        </View>
    )
}

const styles = StyleSheet.create({})

ScreenCreate.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() =>navigation.navigate('Index')}>

                <Text>Back</Text>
            </TouchableOpacity>
        ),
    };
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        addItem: (title, description) => dispatch(
            addShoppingItem(title, description)
            ,ownProps.navigation.navigate('Index'))
    }
}

export default connect(null, mapDispatchToProps)(ScreenCreate)