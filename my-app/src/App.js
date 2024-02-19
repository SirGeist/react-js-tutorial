//import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// }

function MyButton(){
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }

  return(
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}



// const products = [
//   {title: 'Cabbage', isFruit: false, id:1},
//   {title: 'Garlic', isFruit: false, id:2},
//   {title: 'Apple', isFruit: true, id:3},
  
// ];

// export default function ShoppingList(){
//   const listItems = products.map(product=>
//     <li
//       key={product.id}
//       style={{
//         color: product.isFruit ? 'pink' : 'darkgreen'
//       }}
//     >
//       {product.title}
//     </li>
//   );

//   return (
//     <ul>
//       {listItems}
//     </ul>
//   )
// }
function App() {
  return (
    <>
      <h1>
        Counters that update separately
      </h1>
      <MyButton/>
      <MyButton/>
    </>
  );
}

export default App;
