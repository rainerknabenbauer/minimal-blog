import axios from "axios";
import CreateBlogEntryCmd from "./type/CreateBlogEntryCmd";

const backendClient = axios.create();
export const dateTimeFormat = "YYYY-MM-DDTHH:mm:ss"
export const dateFormat = "YYYY-MM-DD"

const CREATE_BLOG_ENTRY_URL = "https://connect-mongo-c2o75vtdlq-lm.a.run.app/"


export const createBlogEntry = async (cmd: CreateBlogEntryCmd) => {
    return await backendClient.post(CREATE_BLOG_ENTRY_URL, cmd)
        .then(response => {
            return true
        })
        .catch(error => {
            return false
        });
}