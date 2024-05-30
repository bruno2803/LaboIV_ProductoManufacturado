import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar sx={{background:"#E66200"}}>
          <h2>PRODUCTO MANUFACTURADO</h2>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
