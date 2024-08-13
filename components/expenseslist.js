import {View ,Text , FlatList} from 'react-native'
import Expensesitem from './expensesitem'



const Expenseslist = ({expenses}) => {
const renderitem = (dataitem)=>{
    return <Expensesitem  description={dataitem.item.description} date={dataitem.item.Date} amount={dataitem.item.amount} id = {dataitem.item.id}  />
}

    return (
   <FlatList data={expenses} renderItem={renderitem} keyExtractor={(item)=>item.id}   />
    );
}

export default Expenseslist;
