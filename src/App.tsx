import { useState, FormEvent } from "react";
import { Task } from "./Components/task";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import Button from "./Components/Button";

function App() {
  const [newTast, setNewTask] = useState("");

  const [tasks, setTasks] = useState([
    {
      id: "0",
      name: "Estudar react com typescript",
    },
    {
      id: "1",
      name: "Estudar Lógica de progamação",
    },
    {
      id: "2",
      name: "Pagar o aluguel",
    },
  ]);

  function handleAddTask(event: FormEvent) {
    event.preventDefault();

    if (newTast === "") return;

    let newItem = {
      id: `${tasks.length + 1}`,
      name: newTast,
    };
    setTasks((allTasks) => [...allTasks, newItem]);
    setNewTask("");
  }
  const Reord = <T,>(list: T[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [remove] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, remove);

    return result;
  };
  const onDragEnd = (result: any) => {
    if (!result.destination) {
      result;
    }
    const item = Reord(tasks, result.source.index, result.destination.index);
    setTasks(item);
  };

  const DeleteTask = (id: string) => {
    let apagar = tasks.filter((tasks) => tasks.id !== id);
    setTasks(apagar);
    console.log(setTasks);
  };

  return (
    <div className="W-full flex justify-center flex-col items-center">
      <h1 className="font-bold text-4xl text-white mb-4">Tarefas</h1>

      <form className="w-full max-w-2xl mb-4 flex" onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Digite o nome da tarefa..."
          className="flex-1 h-10 rounded-md px-2"
          value={newTast}
          onChange={(event) => setNewTask(event.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 ml-4 rounded-md px-4 text-white font-medium"
        >
          Add
        </button>
      </form>

      <section className="bg-zinc-50 p-3 rounded-md w-full max-w-2xl min-h-[100px]">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="TaksId" type="list" direction="vertical">
            {(provided) => (
              <article ref={provided.innerRef} {...provided.droppableProps}>
                {tasks.map((task, index) => (
                  <div className="flex">
                   
                    <Task key={task.id} task={task} index={index} />
                    <Button onClick={()=> DeleteTask(task.id)}/>
                  </div>
                ))}

                {provided.placeholder}
              </article>
            )}
          </Droppable>
        </DragDropContext>
      </section>
    </div>
  );
}

export default App;
