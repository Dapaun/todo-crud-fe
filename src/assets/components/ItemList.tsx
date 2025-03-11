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

    return (
        <div>
            <Input itemList = {itemList} setItemlist = {setItemlist} />
            <ul>
                {itemList.map((item:ItemProps, index: number) => 
                    <li key={index}>
                        <Item {...item} />
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ItemList