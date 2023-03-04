import {Button, Box, TextField, Container, Stack} from '@mui/material'
import React, {useState} from 'react'
import {createBlogEntry} from './api'
import CreateBlogEntryCmd from "./type/CreateBlogEntryCmd";

export const CreateBlogView = () => {
    const [email, setEmail] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const textFieldVariant = "outlined"

    async function submit() {
        let success = await createBlogEntry(new CreateBlogEntryCmd(email, title, content))
        setIsSubmitted(success)
    }

    return (
        <div>
            <Container maxWidth={"xs"}>
                <Stack
                    component="form"
                    autoComplete="off"
                >
                    <TextField
                        id="title"
                        label="Title"
                        variant={textFieldVariant}
                        fullWidth
                        onChange={e => setTitle(e.target.value)}
                        required
                    />
                    <TextField
                        id="content"
                        label="Content"
                        variant={textFieldVariant}
                        fullWidth
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        helperText={'Use markdown to style your article.'}
                        multiline
                        rows={4}
                        required
                    />
                </Stack>
                <Box sx={{pt: 2, pb: 3}}>
                    <Button variant="contained" color={isSubmitted ? "success" : "primary"} onClick={() => submit()}>Submit</Button>
                </Box>
            </Container>
        </div>
    )
}
