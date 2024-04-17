import { Draggable } from "@hello-pangea/dnd";
interface TaskProps {
  task:{
    id: string;
    name: string;
  };
  index: number;
 
 
}

export function Task({ task, index }: TaskProps) {
 
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="w-full h-16 bg-zinc-300 mb-5 px-2 py-3 rounded border-[2px] border-zinc-400"
        >
          <p className="font-medium flex justify-between">{task.name} </p> 
        </div>
      )}
    </Draggable>
  );
}
