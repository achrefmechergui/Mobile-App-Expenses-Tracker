import {View,Text, TextInput  , StyleSheet} from 'react-native'
import { Globalcolor } from '../constants/styles';

const Form = ({label , Textinputconfig}) => {
   
    const Inputstyle = [Styles.input]
    if (Textinputconfig && Textinputconfig.multiline) {
        Inputstyle.push(Styles.multiline)
    }


    return (
      <View style={Styles.inputcontainer}>
        <Text style={Styles.label}>{label}</Text>
        <TextInput style={Inputstyle}  {...Textinputconfig} />                  
                                                            
        {/* //// voir doc */}
      </View>
    );
}



//  ////// amalna haka khater enty mena wela mena 
//  // bech testa3mel nafess el keys mte3 el 
//  input keyboard  

const Styles = StyleSheet.create({
   inputcontainer : {
    marginTop : 10 , 
 


   } , 
   label : {
    fontSize : 15 , 
    color : Globalcolor.color.primary100 , 
    marginBottom : 8
    


   } , 
   input : {
    backgroundColor : Globalcolor.color.primary100 ,
    padding : 10 , 
    fontSize : 18 , 
    borderRadius : 6,
    color : Globalcolor.color.primary700

   } ,
   multiline : {
    minHeight : 100 , 
    textAlignVertical : "top"
  }
})

export default Form;
