import {Button, Box, TextField, Container, Stack} from '@mui/material'
import {useState} from 'react'

export const Login = () => {
    const [server, setServer] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <Container maxWidth={"xs"}>
                <Stack
                    component="form"
                    autoComplete="off"
                >
                    <TextField
                        id="filled-basic"
                        label="Server"
                        variant="filled"
                        value={server}
                        fullWidth
                        onChange={e => setServer(e.target.value)}
                        helperText={!server ? 'Log in to MongoDB Cloud and check Connect.' : ''}
                    />
                    <TextField
                        id="filled-basic"
                        label="Account"
                        variant="filled"
                        value={username}
                        fullWidth
                        onChange={e => setUsername(e.target.value)}
                        helperText={!server ? 'User you specified when creating your database.' : ''}
                    />
                    <TextField
                        id="filled-basic"
                        label="Password"
                        variant="filled"
                        type="password"
                        fullWidth
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        helperText={!server ? 'Password you specified when creating your database.' : ''}
                    />
                </Stack>
                <Box sx={{pt: 2, pb: 3}}>
                    <Button variant="outlined">Log in</Button>
                </Box>
            </Container>
        </div>
    )
}
