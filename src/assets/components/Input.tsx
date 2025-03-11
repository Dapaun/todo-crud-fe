import { useState } from "react";
import { ItemListProps } from "./ItemList";

const Input = (props: ItemListProps) => {

    const {
        itemList,
        setItemlist,
    } = props;

    const [inputValue, setInputValue] = useState(""); 

    const handleChange = (e: any) => {
        setInputValue(e.target.value);
    } 

    const handleClick = () => {
        console.log("Clicked ", inputValue);
        setItemlist([...itemList, {
            text: inputValue,
            isCompleted: false,
          },
        ]);
    } 


    return (
        <div className="flex justify-center mb-5 text-l ">
            <input className="border-2 border-slate-500 mr-2"
                type="text" value={inputValue} onChange={handleChange}/>
            <button className="border-2 border-blue-400 p-1 bg-blue-300 text-white" onClick={handleClick}>Add</button>
        </div>
    )

}

export default Input;