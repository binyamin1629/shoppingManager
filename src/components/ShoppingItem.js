import React from 'react'
import { View, StyleSheet,Text,TouchableOpacity} from 'react-native'
import { Feather } from '@expo/vector-icons'

const ShoppingItem = ({ item, onDelete, onEdit }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{item.title} </Text>
            <Text style={styles.dtaeStyle}> {item.date}</Text>
            <Text style={styles.descriptionStyle}>{item.description} </Text>

            <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={()=>onDelete(item.id)}>
                    <Feather  name="trash-2" size={45} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onEdit(item.id)}>
                    <Feather name="edit" size={45} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({  
    container:{
        borderWidth:1,
        backgroundColor:'white',
        marginVertical:15,
        width:380,
        alignSelf:'center',
        zIndex:1,
        borderRadius:15
        
        
    },

    titleStyle: {
        fontSize: 26,
        fontWeight:'700',
        alignSelf:'center'

    },
    iconsContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginVertical:15
    },
    dtaeStyle:{
        fontSize: 12,
        color:'grey',
        alignSelf:'center'
    },
    descriptionStyle:{
        fontSize: 28,
        fontWeight:'500',
        alignSelf:'center'
    }


})

export default ShoppingItem