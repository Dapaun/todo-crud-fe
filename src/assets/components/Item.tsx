
export interface ItemProps {
    text: string;
    isCompleted: boolean;
    removeItem?: any;
    index?: any;
    id?: number;
}

const Item = (itemProps: ItemProps) => {

    const handleRemove = (index: number) => {
        itemProps.removeItem(index, itemProps.id);
    }

    return (
        <div>
            <div className="m-auto mb-2 w-60 border-2 border-slate-500 rounded-lg p-2 text-lg flex justify-between">
                <p className="text-2xl">
                    {itemProps.text}
                </p>
                <div>
                    <button className="bg-green-300 p-1 rounded-full justify-end mr-2 text-white text-[40px]">V</button>
                    <button className="bg-red-300 p-1 rounded-full justify-end text-white text-[40px]"
                        onClick={() => handleRemove(itemProps.index)}
                    >X</button>
                </div>
            </div>

        </div>
    )
}

export default Item;