import { useState } from "react";
import { ItemProps } from "./Item";
import { BASE_PATH } from "../../App";

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
        fetch(BASE_PATH + "item", {
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            method: "POST",
            body: JSON.stringify({
                text: inputValue,
                isCompleted: false,
              })
        })
            .then((response: any) => response.json())
            .then((data: any) =>
                setItemlist([...itemList, data,
                ])
            );

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