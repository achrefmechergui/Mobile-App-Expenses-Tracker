
import Expensesoutput from '../components/expensesoutput/expensesoutput';
import { useContext } from 'react';
import { Expensescontext } from '../Store/expenses-context';



const Allexpenses = () => {
    const expensectx = useContext(Expensescontext)
    return (
 
     <Expensesoutput  expenses={expensectx.expenses} expensePeriode= "All"/>
    
    );
}

export default Allexpenses;
