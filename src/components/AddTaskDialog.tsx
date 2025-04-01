import { Dialog, DialogTitle, TextField, Button, DialogActions, DialogContent } from "@mui/material";
import { useState } from "react";

interface AddTaskDialogProps {
  open: boolean;
  onClose: () => void;
  onAdd: (task: { id: string; title: string; description: string; status: string }) => void;
}

const AddTaskDialog: React.FC<AddTaskDialogProps> = ({ open, onClose, onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (title.trim()) {
      onAdd({ id: Date.now().toString(), title, description, status: "to do" });
      setTitle("");
      setDescription("");
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add new task ✨</DialogTitle>
      <DialogContent>
        <TextField label="Title" fullWidth sx={{ mt: 2 }} value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextField label="Description" fullWidth multiline sx={{ mt: 2 }} value={description} onChange={(e) => setDescription(e.target.value)} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">Cancel</Button>
        <Button onClick={handleAdd} color="primary">Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTaskDialog;
