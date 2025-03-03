import './App.css';
import { Route, Routes } from 'react-router-dom';
import Item, { ItemProps } from './assets/components/Item';
import ItemList from './assets/components/ItemList';

function App() {
  const itemProps: ItemProps = {
    text: "No item",
    isCompleted: false,
  }

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

  return (
    <>
      <p className="size-8 text-blue-300 text-3xl m-auto w-32 mb-5">To do list</p>
      <Routes>
        <Route path='/list' element={<Item {...itemProps}/>}  /> // to replace item with ItemList
        <Route path='*' element={<ItemList itemList={itemList}/>}  />
     </Routes>
    </>
  )
}

export default App
