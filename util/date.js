
export function Formatdate (date){
    return `${date.getFullYear()} - ${date.getMonth()+1} - ${date.getDate()}`
}

export function Getdaysminsdate (date,days){

 return new Date (date.getFullYear(),date.getMonth(),date.getDate()-days)

}