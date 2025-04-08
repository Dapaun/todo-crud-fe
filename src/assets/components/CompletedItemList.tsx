import Item, { ItemProps } from "./Item";
import { useNavigate } from "react-router";

export interface CompletedItemListProps {
    itemList: ItemProps[];
}

const CompletedItemList = (props: CompletedItemListProps) => {

    const {
        itemList,
    } = props;

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/");
    }

    return (
        <div>
            <ul>
                {itemList.map((item:ItemProps, index: number) => 
                    <li key={index}>
                        <Item {...item} index={index}/>
                    </li>
                )}
            </ul>
            <button 
            onClick={() => handleGoBack()}
            className="m-auto block bg-blue-300 text-white p-2 rounded-lg">
                Back to todo items
            </button>
        </div>
    )
}

export default CompletedItemList;