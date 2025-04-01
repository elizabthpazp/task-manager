import { Container, Typography, Grid } from "@mui/material";
import TaskCard from "./TaskCard";
import AddTaskDialog from "./AddTaskDialog";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { deleteTask, updateTask } from "../redux/taskSlice";
import { Task } from '../types'

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const dispatch = useDispatch();

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleEdit = (task: Task) => {
    setSelectedTask(task);
    setModalOpen(true);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };

  const handleSave = (updatedTask: Task) => {
    dispatch(updateTask(updatedTask));
    setModalOpen(false);
  };

  return (
    <>
      {tasks.length === 0 && (
        <Typography variant="h6" gutterBottom>
          There are no tasks yet
        </Typography>
      )}

      <Grid container spacing={2}>
        {tasks.map((task) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={task.id}
            component={"div" as React.ElementType}
          >
            <TaskCard
              task={task}
              onDelete={() => handleDelete(task.id)}
              onUpdate={() => handleEdit(task)}
            />
          </Grid>
        ))}
      </Grid>

      <AddTaskDialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={(updatedTask) => handleSave(updatedTask)}
        taskToEdit={selectedTask}
      />
    </>
  );
};

export default TaskList;
