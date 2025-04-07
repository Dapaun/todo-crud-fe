import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ItemProps } from './assets/components/Item';
import ItemList from './assets/components/ItemList';
import { useEffect, useState } from 'react';

export const BASE_PATH = "http://localhost:8080/api/";

function App() {
  const [items, setItems] = useState<ItemProps[]>([]);

  const fetchItems = () => {
    fetch(BASE_PATH + "items")
      .then((response: any) => response.json())
      .then((data: ItemProps[]) => setItems(data));
  }

  useEffect(() => {
    fetchItems();
  }, [])

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
