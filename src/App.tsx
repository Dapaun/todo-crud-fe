import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ItemProps } from './assets/components/Item';
import ItemList from './assets/components/ItemList';
import { useState } from 'react';

const itemList: ItemProps[] = [
  {
    text: "First item",
    isCompleted: false,
  },
  {
    text: "Second item",
    isCompleted: true,
  },
  {
    text: "Learn more",
    isCompleted: true,
  }
];

function App() {
  const [items, setItems] = useState(itemList);

  return (
    <>
      <p className="size-8 text-blue-300 text-3xl m-auto w-32 mb-5">To do list</p>
      <Routes>
        <Route path='*' element={<ItemList itemList={items} setItemlist = {setItems}/>}  />
     </Routes>
    </>
  )
}

export default App
