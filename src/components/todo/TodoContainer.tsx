import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>

      <div className="bg-primary-gradient w-full h-full rounded-xl p-1">
        {todos.length > 0 ? (
          <div className="bg-white rounded-lg p-5 w-full h-full space-y-3">
            {todos.map((item) => (
              <TodoCard {...item} />
            ))}
          </div>
        ) : (
          <div className="bg-white p-5 flex justify-center items-center rounded-md">
            <p className="text-lg font-semibold tracking-tight">
              Hmm, There are no task pending 🤖
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
