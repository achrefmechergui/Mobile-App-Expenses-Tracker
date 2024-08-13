
// Pour prendre les valeurs actuelles de action.payload et les ajouter correctement à 
// l'état, tu dois décomposer les propriétés de action.payload dans le nouvel objet.
//  Le spread operator ... te permet de faire cela. Voici pourquoi :

// Sans le spread operator

[...state, { action.payload, id: id }]

// Cela ajoute un objet au tableau state avec une propriété action.
// payload qui est l'objet entier, comme ceci :

{
    action.payload: { description: 'some description', amount: 100, date: '2024-07-15' },
    id: 'some-id'
  }

  
//   Avec le spread operator :
[...state, { ...action.payload, id: id }]

// Cela ajoute un objet au tableau state avec chaque propriété de action.
// payload comme des propriétés distinctes dans l'objet, comme ceci :

{
    description: 'some description',
    amount: 100,
    date: '2024-07-15',
    id: 'some-id'
  }
  



  const expenses = [
    { id: '1', description: 'Groceries', amount: 50 },
    { id: '2', description: 'Rent', amount: 500 },
    { id: '3', description: 'Utilities', amount: 100 }
];

const idToFind = '2';

const index = expenses.findIndex(expense => expense.id === idToFind);

console.log(index); // Affiche : 1
