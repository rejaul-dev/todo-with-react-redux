import { addTodo } from "@/redux/features/todoSlice";
import { useAppDispatch } from "@/redux/hook";
import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const AddTodoModal = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const randomString = Math.random().toString(36).substring(2, 7);

    const taskDetails = {
      id: randomString,
      title: task,
      description,
    };

    dispatch(addTodo(taskDetails));
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient text-base font-semibold">
          Add Todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add task</DialogTitle>
          <DialogDescription>
            Add a task that you want to finish
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Task
            </Label>
            <Input
              id="task"
              onBlur={(e) => setTask(e.target.value)}
              className="col-span-3"
              placeholder="Task"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              onBlur={(e) => setDescription(e.target.value)}
              className="col-span-3"
              placeholder="Description"
            />
          </div>
          <DialogClose asChild>
            <Button type="submit">Save changes</Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
