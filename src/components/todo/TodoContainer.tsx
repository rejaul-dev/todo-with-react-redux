import { Button } from "../ui/button";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <Button className="bg-primary-gradient text-base font-semibold">
          Add Todo
        </Button>
        <Button className="bg-primary-gradient text-base font-semibold">
          Filter
        </Button>
      </div>

      <div className="bg-primary-gradient w-full h-full rounded-xl p-1">
        {/* <div className="bg-white p-5 flex justify-center items-center rounded-md">
          <p className="text-lg font-semibold tracking-tight">
            Hmm, There are no task pending 🤖
          </p>
        </div> */}

        <div className="bg-white rounded-lg p-5 w-full h-full space-y-3">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
