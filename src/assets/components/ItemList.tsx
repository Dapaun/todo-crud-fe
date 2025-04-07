import { BASE_PATH } from "../../App";
import Input from "./Input";
import Item, { ItemProps } from "./Item"

export interface ItemListProps {
    itemList: ItemProps[];
    setItemlist: any;
}

const ItemList = (props: ItemListProps) => {

    const {
        itemList,
        setItemlist,
    } = props;

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

    return (
        <div>
            <Input itemList = {itemList} setItemlist = {setItemlist}/>
            <ul>
                {itemList.map((item:ItemProps, index: number) => 
                    <li key={index}>
                        <Item {...item} removeItem = {removeItem} index={index}/>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ItemList