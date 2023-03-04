import axios from "axios";
import CreateBlogEntryCmd from "./type/CreateBlogEntryCmd";
import ViewBlogEntriesCmd from "./type/ViewBlogEntriesCmd";

const backendClient = axios.create();
export const dateTimeFormat = "YYYY-MM-DDTHH:mm:ss"
export const dateFormat = "YYYY-MM-DD"

const CREATE_BLOG_ENTRY_URL = "https://connect-mongo-c2o75vtdlq-lm.a.run.app/"


export const createBlogEntry = async (cmd: CreateBlogEntryCmd) => {
    return await backendClient.post(CREATE_BLOG_ENTRY_URL, cmd, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            return true
        })
        .catch(error => {
            return false
        });
}

export const viewBlogEntries = async (cmd: ViewBlogEntriesCmd) => {
    return await backendClient.post(CREATE_BLOG_ENTRY_URL, cmd, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            return response
        })
        .catch(error => {
            return false
        });
}