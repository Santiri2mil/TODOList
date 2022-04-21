import {useState} from 'react'
import {TextInput, Button, StyleSheet, View, Modal} from 'react-native'

const TodoInput = ({ onAddItem }) => {

    const  [item, setItem] = useState('');
    
    const onChangeTextHandler = (input) => {
        setItem(input)
    }

    const onAdd = () => {
        onAddItem(item)
        setItem('')
        hide()
    }
    
    return (
        <Modal
        visivble={visible}
        >
            <View style={styles.inputContainer}>
            <TextInput
                placeholder='TODO Item'
                style={styles.TextInput}
                onChangeText={onChangeTextHandler}
                value={item}
            />
            <Button
                title='ADD'
                onPress={onAdd}
            />
            </View>

        </Modal>
        
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row', //eje principal
        justifyContent: 'space-between', //eje secundario
        alignItems: 'center',
      },
      TextInput: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        width: '80%'
      }
})
export default TodoInput