import {
  Dialog,
  DialogTitle,
  TextField,
  Button,
  DialogActions,
  DialogContent,
  MenuItem,
} from "@mui/material";
import { useState, useEffect } from "react";

interface Task {
  id: string;
  title: string;
  description: string;
  status: "to do" | "in progress" | "done";
}

interface AddTaskDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (task: Task) => void;
  taskToEdit?: Task | null;
}

const AddTaskDialog: React.FC<AddTaskDialogProps> = ({
  open,
  onClose,
  onSave,
  taskToEdit,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"to do" | "in progress" | "done">(
    "to do"
  );

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setStatus(taskToEdit.status);
    } else {
      setTitle("");
      setDescription("");
      setStatus("to do");
    }
  }, [taskToEdit]);

  const handleSave = () => {
    if (title.trim()) {
      onSave({
        id: taskToEdit?.id || Date.now().toString(),
        title,
        description,
        status,
      });
      setTitle("");
      setDescription("");
      setStatus("to do");
      onClose();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { borderRadius: "25px" } }}
    >
      <DialogTitle>
        {taskToEdit ? "Edit Task ✏️" : "Add New Task ✨"}
      </DialogTitle>
      <DialogContent>
        <TextField
          label="Title"
          fullWidth
          sx={{
            mt: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: "15px",
            },
          }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Description"
          fullWidth
          multiline
          sx={{
            mt: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: "15px",
            },
          }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          select
          label="Status"
          fullWidth
          sx={{
            mt: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: "15px",
            },
          }}
          value={status}
          onChange={(e) =>
            setStatus(e.target.value as "to do" | "in progress" | "done")
          }
          SelectProps={{
            MenuProps: {
              PaperProps: {
                sx: {
                  borderRadius: "15px",
                },
              },
            },
          }}
        >
          <MenuItem sx={{ borderRadius: "8px", m: 0.5 }} value="to do">
            To Do
          </MenuItem>
          <MenuItem sx={{ borderRadius: "8px", m: 0.5 }} value="in progress">
            In Progress
          </MenuItem>
          <MenuItem sx={{ borderRadius: "8px", m: 0.5 }} value="done">
            Done
          </MenuItem>
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          {taskToEdit ? "Save Changes" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTaskDialog;
