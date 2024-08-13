import {View ,Text} from 'react-native'
import Expensesoutput from '../components/expensesoutput/expensesoutput';
import { useContext, useEffect, useState} from 'react'
import { Expensescontext } from '../Store/expenses-context';
import { Getdaysminsdate } from '../util/date';
import { Getdata } from '../http/Storeexpense';
import Loading from '../ui/loading';

const Recentexpenses = () => {
    const [isfetching , setisfetching] = useState(true)
   
    const expensectx = useContext(Expensescontext)



    useEffect(()=>{
     async function Gethelper (){

      const result =  await Getdata()
      setisfetching(false)
       expensectx.Getdata(result)
     }
     
     Gethelper()
 
    }, [])


    if (isfetching){
        return (
            <Loading/>
        )
    }
   
    const recentexpenses =expensectx.expenses.filter((expense)=>{
        const today = new Date()  /// get this day
        const date7daysago = Getdaysminsdate(today,7)
        return expense.Date>date7daysago
    })

    return (
   
   <Expensesoutput  expenses={recentexpenses} expensePeriode= "Last 7 days" />

    );
}

export default Recentexpenses;
