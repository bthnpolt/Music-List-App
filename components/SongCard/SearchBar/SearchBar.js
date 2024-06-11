import {} from 'react';
import { View,TextInput } from 'react-native';
import styles from './SearchBarStyle';

const SearchBar = (props)=>{
    
    return(
        <View>
            <TextInput style={styles.container} placeholder='Ara...' onChangeText={props.onSearch}/>
        </View>
    )
}

export default SearchBar;