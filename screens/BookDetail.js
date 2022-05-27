/* eslint-disable no-unreachable */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View,Image ,Button} from 'react-native'
import React,{useReducer} from 'react'
//import { useReducer } from 'react/cjs/react.development';
import { reducer } from './reducer';

// const reducer =(state,action) => {
//   if(action.type === "plus"){
//     return state + 1;
//   }else{
//     return state - 1;
//   }
//   // return state;
// }

const BookDetail = ({route,navigation}) => {
  const { data } = route.params;
  console.log("data :",route.params);
  const [count,dispatch] = useReducer(reducer,0)
  

  return (
    <View style={{flex:1}}>
     
     <View style={{flex:0.6,backgroundColor:"skyblue"}}>
     {/* <View style={{marginTop:30,alignItems:"center", backgroundColor:"white"}}> */}
      <Text style={{fontSize:20, alignSelf:"center",justifyContent:"flex-start"}}>Detail book</Text>
      <View style={{alignItems:"center",justifyContent:"center",marginTop:30}}>
      <Image source={data.image} style={{width:100,height:150}} />
      </View>

      <View style={{alignItems:"center",marginTop:20}}>
        <Text>{data.name}</Text>
        <Text>{data.writer}</Text>
      </View>

      <View style={{flexDirection:"row",justifyContent:"space-around"}}>
            <Button 
            onPress={() => dispatch ({type:"plus"})}
            title="Plus"
            />
            <Text>{count}</Text>

            <Button 
            onPress={() => dispatch ({type:"minus"})}
            title="Minus"
            />

      </View>
      
    </View>

    <View style={{flex:0.4,backgroundColor:"pink"}}>
    </View>
     
     {/* </View> */}
    
     
    </View>
  );
}

export default BookDetail;

const styles = StyleSheet.create({})