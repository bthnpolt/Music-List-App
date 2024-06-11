import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,FlatList,Image,SafeAreaView} from 'react-native';
import music_data from "./Data/music_data.json";
import SongCard from './components/SongCard/SongCard';
import GlobalStyle from './components/SongCard/GlobalStyle/GlobalStyle';
import SearchBar from './components/SongCard/SearchBar/SearchBar';
import { useState } from 'react';

export default function App() {
  const[list,setList]=useState(music_data);
  const renderSong = ({item})=><SongCard song={item}/>
  const renderSeparator = <View style={styles.separator}/>

  const handleSearch = (text) => {
    const filterdList = music_data.filter(song=>{
      const searchText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      return currentTitle.indexOf(searchText) >-1;
    })
      setList(filterdList);
  }
    
  return (
    <SafeAreaView style={GlobalStyle.androidSafeArea}>
      <StatusBar style="auto" />
      <SearchBar onSearch={handleSearch}/>
      <FlatList
        keyExtractor={(item)=> item.id}
        data={list}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeparator}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  separator:{
    borderWidth:1,
    borderColor:'#e0e0e0' 
  }
});
