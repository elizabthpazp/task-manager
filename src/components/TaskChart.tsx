import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Card, CardContent, Typography } from "@mui/material";

const COLORS = ["#FFBB28", "#0088FE", "#00C49F"];

interface Task {
  id: string,
  title: string,
  description: string,
  status: "to do" | "in progress" | "done";
}

const TaskChart = ({ tasks }: { tasks: Task[] }) => {
  const data = [
    { name: "To do", value: tasks.filter((t) => t.status === "to do").length },
    { name: "In progress", value: tasks.filter((t) => t.status === "in progress").length },
    { name: "done", value: tasks.filter((t) => t.status === "done").length },
  ];

  return (
    <Card sx={{ p: 2, mt: 4 }}>
      <CardContent>
        <Typography variant="h5" textAlign="center">📊 Task status</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value" label>
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default TaskChart;
