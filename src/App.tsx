import './App.css';
import {CreateBlogView} from "./pages/blog/CreateBlogView";
import {BlogView} from "./pages/blog/BlogView";
import {Typography} from "@mui/material";

function App() {
  return (
    <div className="App">
        <Typography variant="h1">Publog</Typography>

        <BlogView type="recent"/>
        <CreateBlogView/>

        <Typography variant="h4">How does it work?</Typography>
        <Typography sx={{pt: 1}} variant="body2">
            Write your blog entry and store it.
            Your eMail address is required for editing, deleting and to filter for your own blog articles.
        </Typography>
        <Typography sx={{pt: 2}} variant="h6">type, click, share.</Typography>
    </div>
  );
}

export default App;
