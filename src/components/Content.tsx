import { useState } from "react"
import "../Assete/styles/content.css"
import { RiDeleteBin5Line } from "react-icons/ri"
import { AiOutlinePlus } from "react-icons/ai"
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd"



interface ICard {
    username: string;
    id: any;
    userid: number;
}

export default function Content() {

    // const [username, setUsername] = useState(0)
    const [card, setCard] = useState<ICard[]>([
        {
            username: "user",
            userid: 1,
            id: 1,
        },
        {
            username: "user",
            userid: 2,
            id: 2,
        },
        {
            username: "user",
            userid: 3,
            id: 3,
        },
        {
            username: "user",
            userid: 4,
            id: 4,
        },

    ]);
    const onDragEnd = (result: DropResult) => {
        const { source, destination } = result
        if (!destination) return;
        const items = Array.from(card)
        const [newOrder] = items.splice(source.index, 1)
        items.splice(destination.index, 0, newOrder)
        setCard(items)

    }
    const handelbox = () => {

        if (card.length === 12) {
            return;
        }
        else {
            setCard([...card, {
                username: "user",
                userid: card.length += 1,
                id: Math.floor(Math.random() * 100000),
            }])
        }
    }
    const deletehandler = (id: number) => {
        const boxes: ICard[] = [...card];
        const filtredboxes = boxes.filter(p => p.id !== id)
        setCard(filtredboxes)
    }
    return (
        <div className="content">

            <div className={card.length >= 5 ? "content-container-more" : "content-container"}>
                {card.map((item, index) => {
                    return (
                        <div className="card-container">
                            <div className="button" onClick={() => deletehandler(item.id)}>
                                <RiDeleteBin5Line />
                            </div>
                            <h5 className="h5">
                                {item.username} {item.userid}
                            </h5>
                        </div>
                    )
                })}
            </div>
            <div onClick={handelbox} className="footer-container">
                <AiOutlinePlus />
            </div>

        </div>
    )
}