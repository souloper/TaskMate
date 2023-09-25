// import { Props } from 'next/script'
// import { todo } from 'node:test';
import { useBoardStore } from '@/store/BoardStore';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import { Draggable, Droppable } from 'react-beautiful-dnd'
import TodoCard from './TodoCard';
import { useModalStore } from '@/store/ModalStore';

type Props = {
    id:TypedColumn;
    todos: Todo[];
    index: number;
};

const idToColumnText: {
    [key in TypedColumn]: string;
} = {
    "todo": "To Do 📝",
    "inprogress": "In Progress 🚧",
    "done": "Done ✅",
}


function Column({ id, todos, index }: Props) {
    const [searchString,setNewTaskType] = useBoardStore((state) => [
        state.searchString,
        state.setNewTaskType,
    ]);
    const openModal = useModalStore((state) => state.openModal);

    const handleAddTodo =()=>{
        setNewTaskType(id);
        openModal();
    }
    // console.log(index)
  return (
    <Draggable draggableId={id} index={index}>
        {(provided) => (
            <div
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
            >
                <Droppable droppableId={index.toString()} type="card">
                    {(provided, snapshot) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className={`p-2 rounded-2xl shadow-sm ${
                                snapshot.isDraggingOver ? "bg-green-200" : "bg-white/50"
                            }`}
                        >
                            <h2 className='flex justify-between font-bold text-xl p-2'>
                                {idToColumnText[id]}
                                <span className="text-grey-500 bg-gray-200 rounded-full px-2 py-1 text-sm font-normal">
                                    {
                                        !searchString ?
                                    todos.length: todos.filter(todo => todo.title.toLowerCase().includes(searchString.toLowerCase())).length}
                                </span>
                            </h2>

                            <div className='space-y-2'>
                                {todos.map((todo, index) => {
                                    if (
                                        searchString && !todo.title.toLowerCase().includes(searchString.toLowerCase())
                                        ) return null;
                                    return(
                                    <Draggable
                                        key={todo.$id}
                                        draggableId={todo.$id}
                                        index={index}
                                    >
                                       {(provided) => (
                                            <TodoCard
                                                todo={todo}
                                                index={index}
                                                id={id}
                                                innerRef={provided.innerRef}
                                                draggableProps={provided.draggableProps}
                                                dragHandleProps={provided.dragHandleProps}
                                            />
                                       )} 
                                    </Draggable>
                                )})}

                                {provided.placeholder} 
                                {/* if any card is dragged over another card the below card will create space for the above card */}

                                <div className='flex items-center justify-center p-2'>
                                    <button onClick={handleAddTodo} className='text-green-500 hover:text-green-600'>
                                    <PlusCircleIcon className='h-10 w-10'/></button></div>
                            </div>
                        </div>
                    )}
                </Droppable>
            </div>
        )}
    </Draggable>
  );
}

export default Column