import { useState } from "react";
import { ItemProps } from "./Item";

export interface InputProps {
    itemList: ItemProps[];
    setItemlist: any;
}

const Input = (props: InputProps) => {

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
        setInputValue("");
    }


    return (
        <div className="flex justify-center mb-5 text-l">
            <input className="border-2 border-slate-500 mr-2 p-1 rounded-lg"
                placeholder="Add a new thing"
                type="text" value={inputValue} onChange={handleChange}/>
            <button className="border-2 border-blue-400 p-1 bg-blue-300 text-white rounded-lg" onClick={handleClick}>Add</button>
        </div>
    )

}

export default Input;