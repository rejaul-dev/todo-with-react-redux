import TodoContainer from "@/components/todo/TodoContainer";
import Wrapper from "@/components/ui/Wrapper";

const Todo = () => {
  return (
    <Wrapper>
      <h1 className="text-center text-2xl font-bold my-10">My Todos</h1>
      <TodoContainer />
    </Wrapper>
  );
};

export default Todo;
