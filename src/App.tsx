import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ItemProps } from './assets/components/Item';
import ItemList from './assets/components/ItemList';
import { useEffect, useState } from 'react';
import CompletedItemList from './assets/components/CompletedItemList';

export const BASE_PATH = "http://localhost:8080/api/";

// Can add is done separate list , maybe? Use the bool

function App() {
  const [items, setItems] = useState<ItemProps[]>([]);

  const [completedItems, setCompletedItems] = useState<ItemProps[]>([]);

  const fetchItems = () => {
    fetch(BASE_PATH + "items")
      .then((response: any) => response.json())
      .then((data: ItemProps[]) => {
        const uncompleted= data.filter((item: ItemProps) => item.isCompleted == false);
        const completed= data.filter((item: ItemProps) => item.isCompleted === true);
        setItems(uncompleted);
        setCompletedItems(completed);
      });
  }

  useEffect(() => {
    fetchItems();
  }, [])

  return (
    <>
      <p className="size-8 text-blue-300 text-3xl m-auto w-32 mb-5">To do list</p>
      <Routes>
        <Route path='*' element={<ItemList itemList={items} setItemlist = {setItems}/>}  />
        <Route path='/completed' element={<CompletedItemList itemList={completedItems} />}  />
     </Routes>
    </>
  )
}

export default App
