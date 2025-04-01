import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "lightPurple" }}>
      <Toolbar>
        <Typography variant="inherit" sx={{ flexGrow: 1 }}>
          TASK MANAGER 🚀
        </Typography>
        <Button color="inherit" component={Link} to="/">Tasks</Button>
        <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
