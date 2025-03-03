import { FC } from "react";
import Item, { ItemProps } from "./Item"

const ItemList: FC<ItemProps[]> = (items) => {
    console.log("Items ", items);
    return (
        <div>
            <ul>
                {items.map((item:ItemProps, index) => 
                    <li key={index}>
                        <Item {...item} />
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ItemList