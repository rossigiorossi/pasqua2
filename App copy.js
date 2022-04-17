import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View,TouchableOpacity,Button, } from 'react-native';
import { MaterialCommunityIcons as Icon} from 'react-native-vector-icons';
const madre = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      gameState:[
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
      ],
      currentPlayer: 0,
    } 
  }
  componentDidMount(){
    this.inizializeGame();
  
  }

  inizializeGame= () =>{
    this.setState({gameState:
      [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
      ]
    });
  }
  onTilePress = (row,col) => {
   var currentPlayer= this.state.currentPlayer;

   var arr = this.state.gameState.slice();
   arr [row][col]=arr [row][col]+1;
   arr [row][col]=arr [row][col]%3;
   this.setState({gameState:arr});
  }
  onNewGamePress = () => {
    this.inizializeGame();
  }

  
  renderIcon =(row, col) =>{
    var value = this.state.gameState[row][col];
    switch (value) 
    {
      case 2: return <Icon name='close' style={styles.tilex}/>;
      case 1: return <Icon name='circle' style={styles.tileO}/>
      default: return <View/>;
    }
  }
  render(){
    return (
      
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>      
          <View style={[styles.tile, {borderLeftWidth:0, borderTopWidth:0}]}>
            <Text style = {styles.miostile}>
               
            </Text>            
          </View> 
          <View style={[styles.tile, {borderLeftWidth:0, borderTopWidth:0}]}>
            <Text style = {styles.miostile}>
               4
            </Text>            
          </View>  
          <View style={[styles.tile, {borderLeftWidth:0, borderTopWidth:0}]}>
            <Text style = {styles.miostile}>
               2
            </Text>            
          </View> 
          <View style={[styles.tile, {borderLeftWidth:0, borderTopWidth:0}]}>
            <Text style = {styles.miostile}>
               1
            </Text>            
          </View> 
          <View style={[styles.tile, {borderLeftWidth:0, borderTopWidth:0}]}>
            <Text style = {styles.miostile}>
               5
            </Text>            
          </View> 
          <View style={[styles.tile, {borderLeftWidth:0, borderTopWidth:0}]}>
            <Text style = {styles.miostile}>
               3
            </Text>            
          </View> 
          <View style={[styles.tile, {borderLeftWidth:0, borderTopWidth:0}]}>
            <Text style = {styles.miostile}>
               5
            </Text>            
          </View> 
          </View>
          <View style={{flexDirection: 'row'}}>      
          <View style={[styles.tile, {borderLeftWidth:madre[6], borderTopWidth:0}]}>
            <Text style = {styles.miostile}>
               5
            </Text>            
          </View>
          <TouchableOpacity onPress ={() =>this.onTilePress(1,1)} style={[styles.tile, {borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
            {this.renderIcon(1,1)}
          </TouchableOpacity>  
          <TouchableOpacity onPress ={() =>this.onTilePress(1,2)} style={[styles.tile, {borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
          {this.renderIcon(1,2)}
          </TouchableOpacity>
          <TouchableOpacity onPress ={() =>this.onTilePress(1,3)} style={[styles.tile, {borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
          {this.renderIcon(1,3)}
          </TouchableOpacity>
          <TouchableOpacity onPress ={() =>this.onTilePress(1,4)} style={[styles.tile, {backgroundColor: '#dadada',borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
          {this.renderIcon(1,4)}
          </TouchableOpacity>
          <TouchableOpacity onPress ={() =>this.onTilePress(1,5)} style={[styles.tile, {backgroundColor: '#dadada',borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
          {this.renderIcon(1,5)}
          </TouchableOpacity>
          <TouchableOpacity onPress ={() =>this.onTilePress(1,6)} style={[styles.tile, {backgroundColor: '#dadada',borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
          {this.renderIcon(1,6)}
          </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>      
          <View style={[styles.tile, {borderLeftWidth:0, borderTopWidth:0}]}>
            <Text style = {styles.miostile}>
               5
            </Text>            
          </View> 
          <TouchableOpacity onPress ={() =>this.onTilePress(2,1)} style={[styles.tile, {borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
            {this.renderIcon(2,1)}
          </TouchableOpacity>  
          <TouchableOpacity onPress ={() =>this.onTilePress(2,2)} style={[styles.tile, {borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
          {this.renderIcon(2,2)}
          </TouchableOpacity>
          <TouchableOpacity onPress ={() =>this.onTilePress(2,3)} style={[styles.tile, {backgroundColor: '#dadada',borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
          {this.renderIcon(2,3)}
          </TouchableOpacity>
          <TouchableOpacity onPress ={() =>this.onTilePress(2,4)} style={[styles.tile, {backgroundColor: '#dadada',borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
          {this.renderIcon(2,4)}
          </TouchableOpacity>
          <TouchableOpacity onPress ={() =>this.onTilePress(2,5)} style={[styles.tile, {backgroundColor: '#dadada',borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
          {this.renderIcon(2,5)}
          </TouchableOpacity>
          <TouchableOpacity onPress ={() =>this.onTilePress(2,6)} style={[styles.tile, {borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
          {this.renderIcon(2,6)}
          </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>      
          <View style={[styles.tile, {borderLeftWidth:0, borderTopWidth:0}]}>
            <Text style = {styles.miostile}>
               2
            </Text>            
          </View>
          <TouchableOpacity onPress ={() =>this.onTilePress(3,1)} style={[styles.tile, {borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
            {this.renderIcon(3,1)}
          </TouchableOpacity>  
          <TouchableOpacity onPress ={() =>this.onTilePress(3,2)} style={[styles.tile, {borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
          {this.renderIcon(3,2)}
          </TouchableOpacity>
          <TouchableOpacity onPress ={() =>this.onTilePress(3,3)} style={[styles.tile, {borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
          {this.renderIcon(3,3)}
          </TouchableOpacity>
          <TouchableOpacity onPress ={() =>this.onTilePress(3,4)} style={[styles.tile, {borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
          {this.renderIcon(3,4)}
          </TouchableOpacity>
          <TouchableOpacity onPress ={() =>this.onTilePress(3,5)} style={[styles.tile, {borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
          {this.renderIcon(3,5)}
          </TouchableOpacity>
          <TouchableOpacity onPress ={() =>this.onTilePress(3,6)} style={[styles.tile, {borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
          {this.renderIcon(3,6)}
          </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>      
          <View style={[styles.tile, {borderLeftWidth:0, borderTopWidth:0}]}>
            <Text style = {styles.miostile}>
               1
            </Text>            
          </View> 
          <TouchableOpacity onPress ={() =>this.onTilePress(4,1)} style={[styles.tile, {borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
            {this.renderIcon(4,1)}
          </TouchableOpacity>  
          <TouchableOpacity onPress ={() =>this.onTilePress(4,2)} style={[styles.tile, {borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
          {this.renderIcon(4,2)}
          </TouchableOpacity>
          <TouchableOpacity onPress ={() =>this.onTilePress(4,3)} style={[styles.tile, {borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
          {this.renderIcon(4,3)}
          </TouchableOpacity>
          <TouchableOpacity onPress ={() =>this.onTilePress(4,4)} style={[styles.tile, {borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
          {this.renderIcon(4,4)}
          </TouchableOpacity>
          <TouchableOpacity onPress ={() =>this.onTilePress(4,5)} style={[styles.tile, {borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
          {this.renderIcon(4,5)}
          </TouchableOpacity>
          <TouchableOpacity onPress ={() =>this.onTilePress(4,6)} style={[styles.tile, {borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
          {this.renderIcon(4,6)}
          </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>      
          <View style={[styles.tile, {borderLeftWidth:0, borderTopWidth:0}]}>
            <Text style = {styles.miostile}>
               4
            </Text>            
          </View> 
          <TouchableOpacity onPress ={() =>this.onTilePress(5,1)} style={[styles.tile, {borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
            {this.renderIcon(5,1)}
          </TouchableOpacity>  
          <TouchableOpacity onPress ={() =>this.onTilePress(5,2)} style={[styles.tile, {borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
          {this.renderIcon(5,2)}
          </TouchableOpacity>
          <TouchableOpacity onPress ={() =>this.onTilePress(5,3)} style={[styles.tile, {backgroundColor: '#dadada',borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
          {this.renderIcon(5,3)}
          </TouchableOpacity>
          <TouchableOpacity onPress ={() =>this.onTilePress(5,4)} style={[styles.tile, {backgroundColor: '#dadada',borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
          {this.renderIcon(5,4)}
          </TouchableOpacity>
          <TouchableOpacity onPress ={() =>this.onTilePress(5,5)} style={[styles.tile, {backgroundColor: '#dadada',borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
          {this.renderIcon(5,5)}
          </TouchableOpacity>
          <TouchableOpacity onPress ={() =>this.onTilePress(5,6)} style={[styles.tile, {borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
          {this.renderIcon(5,6)}
          </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>      
          <View style={[styles.tile, {borderLeftWidth:0, borderTopWidth:0}]}>
            <Text style = {styles.miostile}>
               3
            </Text>            
          </View> 
          <TouchableOpacity onPress ={() =>this.onTilePress(6,1)} style={[styles.tile, {borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
            {this.renderIcon(6,1)}
          </TouchableOpacity>  
          <TouchableOpacity onPress ={() =>this.onTilePress(6,2)} style={[styles.tile, {borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
          {this.renderIcon(6,2)}
          </TouchableOpacity>
          <TouchableOpacity onPress ={() =>this.onTilePress(6,3)} style={[styles.tile, {borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
          {this.renderIcon(6,3)}
          </TouchableOpacity>
          <TouchableOpacity onPress ={() =>this.onTilePress(6,4)} style={[styles.tile, {borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
          {this.renderIcon(6,4)}
          </TouchableOpacity>
          <TouchableOpacity onPress ={() =>this.onTilePress(6,5)} style={[styles.tile, {borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
          {this.renderIcon(6,5)}
          </TouchableOpacity>
          <TouchableOpacity onPress ={() =>this.onTilePress(6,6)} style={[styles.tile, {borderLeftWidth:1, borderTopWidth:1, borderTopWidth:1, borderdownWidth:1}]}>
          {this.renderIcon(6,6)}
          </TouchableOpacity>
          </View>
        <Button title='new game' color= 'green' onPress={this.onNewGamePress}/>
        <View style={styles.miostile}>
          <Text>To share a photo from your phone with a friend, just press the button below!</Text>
        </View>
        <View style={styles.miostile}>
          <Text>pappapperoooooooooooooooooooooooooooooooooo</Text>
        </View>

      </View> 
  
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tile:{
    borderWidth:1,
    width:50,
    height:50,
    borderColor:'grey',
   
  },
  tilex:{
    color:'black',
    fontSize:50,
  

  },
  tileO:{
    color:'black',
    fontSize:40,
    padding:5,
   

  },
  miostile:{
    color:'red',
    fontSize:35,
    textAlign: 'center',

  }  
});
