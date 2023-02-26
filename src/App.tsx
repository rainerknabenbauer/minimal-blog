import './App.css';
import {Login} from "./pages/[host]/login/Login";
import {Container, Typography} from "@mui/material";

function App() {
  return (
    <div className="App">
        <Typography variant="h1">Privlog</Typography>
        <Typography variant="body1">Your private blog in the browser.</Typography>

        <Login/>

        <Typography variant="h2">How does it work?</Typography>
        <Typography sx={{pt: 2}} variant="h6">Bring your own database!</Typography>
        <Typography sx={{pt: 1}} variant="body2">Create your free MongoDB cloud account.</Typography>
        <Typography sx={{pt: 2}} variant="h5">Managing access</Typography>
        <Typography sx={{pt: 1}} variant="body2">Login credentials are only stored in your browser, we know nothing about you.</Typography>
        <Typography sx={{pt: 2}} variant="h4">Want to delete your data?</Typography>
        <Typography sx={{pt: 1}} variant="body2">Do it yourself - delete the whole database!</Typography>
    </div>
  );
}

export default App;
