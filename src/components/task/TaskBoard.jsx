import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import NoTaskFound from "./NoTaskFound";
import SearchBox from "./SearchBox";
import TaskHeader from "./TaskHeader";
import TaskList from "./TaskList";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description: "I want to learn React such a powerful library",
    tags: ["react", "javascript"],
    priority: "high",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [showModal, setShowModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  function handleAddTask(task, isAdd) {
    if (isAdd) {
      setTasks([...tasks, task]);
    } else {
      setTasks(
        tasks.map((t) => {
          if (t.id === task.id) {
            return task;
          }
          return t;
        })
      );
    }
    setShowModal(false);
  }

  function handleCloseClick() {
    setShowModal(false);
    setTaskToEdit(null);
  }

  function handleEditTask(task) {
    setTaskToEdit(task);
    setShowModal(true);
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  function handleDeleteAllTask() {
    setTasks([]);
  }

  function handleFavoriteTask(id) {
    const taskIndex = tasks.findIndex((task) => task.id === id);

    const newTasks = [...tasks];
    newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite;
    setTasks(newTasks);
  }

  function handleSearch(searchTerm) {
    console.log(searchTerm);
    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setTasks([...filtered]);
  }

  return (
    <section className="mb-20" id="tasks">
      {showModal && (
        <AddTaskModal
          onSave={handleAddTask}
          taskToEdit={taskToEdit}
          onCloseClick={handleCloseClick}
        />
      )}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchBox onSearch={handleSearch} />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskHeader
            onAddClick={() => setShowModal(true)}
            onDeleteAllClick={handleDeleteAllTask}
          />
          {tasks && tasks.length > 0 ? (
            <TaskList
              tasks={tasks}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
              onFavorite={handleFavoriteTask}
            />
          ) : (
            <NoTaskFound />
          )}
        </div>
      </div>
    </section>
  );
}
