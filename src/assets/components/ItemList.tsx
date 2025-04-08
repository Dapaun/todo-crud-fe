import { BASE_PATH } from "../../App";
import Input from "./Input";
import Item, { ItemProps } from "./Item";
import { useNavigate } from "react-router";


export interface ItemListProps {
    itemList: ItemProps[];
    setItemlist: any;
}

const ItemList = (props: ItemListProps) => {

    const {
        itemList,
        setItemlist,
    } = props;

    const navigate = useNavigate();

    const removeItem = (itemKey: number, id: number) => {
        fetch(BASE_PATH + `item/${id}`, {
            method: "DELETE",
        })
            .then((response: any) => response)
            .then((data: any) =>  {
                if (data.status === 200) {
                    setItemlist(itemList.filter(
                        (item: ItemProps, index: number) => index !== itemKey
                    ));
                }
            })
    }

    const changeIsCompleted = (itemKey: number, id: number) => {
        fetch(BASE_PATH + `item/${id}`, {
            method: "PATCH",
        })
            .then((response: any) => response)
            .then((data: any) => {
                setItemlist(
                    itemList.map((item: ItemProps) => {
                        if (item.id === id) {
                            item.isCompleted = true;
                        }
                        return item;
                    })
                )
            })
    }

    const handleGoBack = () => {
        navigate("/completed");
    }

    return (
        <div>
            <Input itemList = {itemList} setItemlist = {setItemlist}/>
            <ul>
                {itemList.map((item:ItemProps, index: number) => 
                    <li key={index}>
                        <Item {...item} removeItem = {removeItem} changeIsCompleted = {changeIsCompleted}  index={index}/>
                    </li>
                )}
            </ul>
            <button 
            onClick={() => handleGoBack()}
            className="m-auto block bg-blue-300 text-white p-2 rounded-lg">
                Back to completed
            </button>
        </div>
    )
}

export default ItemList