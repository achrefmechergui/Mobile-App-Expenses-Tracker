import {View,Text , StyleSheet} from 'react-native'
import Expenseslist from '../expenseslist.js'
import Expensessummary  from '../expensessummary';
import { DATA } from '../../dummy-data/dummy-data.js';
import { Globalcolor } from '../../constants/styles.js';


const Expensesoutput = ({expensePeriode,expenses}) => {
    return (
        <View style={Styles.container}>
            <Expensessummary periode={expensePeriode} expenses={expenses} />
            <Expenseslist expenses={expenses}/>

        </View>
    );
}

const Styles = StyleSheet.create({
    container : {
           flex : 1,
       paddingHorizontal : 24 , 
       paddingTop : 24 , 
       paddingBottom : 0 ,
       
        backgroundColor : Globalcolor.color.primary700
    }
})

export default Expensesoutput;
