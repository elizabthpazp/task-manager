import axios from 'axios';
import { Task } from '../types';

const API_URL = 'https://mm4adbj7u7.execute-api.us-east-2.amazonaws.com/default/task-manager';

export const getTasks = async (): Promise<Task[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener tareas:", error);
    throw error;
  }
};
  

export const createTask = async (task: Task) => {
  try {
    const response = await axios.post(API_URL, task);
    console.log(response.data);  
  } catch (error) {
    console.error("Error adding task:", error);
  }
};

export const updateTaskAPI = async (task: Task) => { 
  try {
    const response = await axios.put(`${API_URL}`, task);
    console.log(response.data);  
  } catch (error) {
    console.error("Error updating task:", error);
  }
};

export const deleteTaskAPI = async (task: Task) => {
  try {
    const response = await axios.delete(API_URL, {
      data: task,
    });
    console.log(response.data);
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};
