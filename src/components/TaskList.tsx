import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import TaskCard from "./TaskCard";
import AddTaskDialog from "./AddTaskDialog";
import { useState } from "react";

interface Task {
  id: string;
  title: string;
  description: string;
  status: "to do" | "in progress" | "done";
}

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: string) => void;
  onUpdate: (task: Task) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onUpdate }) => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleEdit = (task: Task) => {
    setSelectedTask(task);
    setModalOpen(true);
  };

  const handleSave = (updatedTask: Task) => {
    onUpdate(updatedTask);
    setModalOpen(false);
  };

  return (
    <>  
      {tasks?.length == 0 ? (
        <Typography variant="h6" gutterBottom>
          There are no tasks yet
        </Typography>
      ) : (
        ""
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
              onDelete={onDelete}
              onUpdate={() => handleEdit(task)}
            />
          </Grid>
        ))}
      </Grid>
      <AddTaskDialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        taskToEdit={selectedTask}
      />
    </>
  );
};

export default TaskList;
