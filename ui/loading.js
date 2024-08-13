import {View ,ActivityIndicator , StyleSheet} from 'react-native'
import { Globalcolor } from '../constants/styles';

const Loading = () => {
    return (
     <View style={Styles.container}>
<ActivityIndicator size="large"  color="white" />
     </View>
    );
}


const Styles = StyleSheet.create({
    container: { 
        flex : 1 , 
        alignItems : "center" , 
        justifyContent : "center" ,
        backgroundColor : Globalcolor.color.primary700

    }
})

export default Loading;
