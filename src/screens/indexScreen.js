import React from 'react'
import { View,  StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { deleteShoppingItem } from '../redux/shopping/shoppingActions'
import ShoppingItem from '../components/ShoppingItem'


const IndexScreen = ({ navigation, shopping_list, deleteItem }) => {

    return (
        <View style={styles.row}>

            <FlatList
                data={shopping_list}
                keyExtractor={(shopItem) => shopItem.id.toString()}
                renderItem={({ item }) => {

                    return (

                        <View style={styles.row}>

                            <ShoppingItem
                                item={item}
                                onDelete={(id) => { deleteItem(id) }}
                                onEdit={(id) => { navigation.navigate('Edit', { id: id })}}
                            />

                        </View>

                    )
                }}

            />
        </View>
    )
}




IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>

                <Feather name="plus" size={45} />
            </TouchableOpacity>
        ),
    };
}







const styles = StyleSheet.create({
    row: {
        flex:1,
        backgroundColor:'lightgray',
        zIndex:-1
    },
  
  
  


})

const mapStateToProps = state => {
    return { shopping_list: state.shop.shopping_list }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteItem: (id) => dispatch(deleteShoppingItem(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexScreen)



