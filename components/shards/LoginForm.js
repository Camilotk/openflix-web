import React, {useState} from 'react'
import api from '../../services/api'
import axios from 'axios'
import { getAccessToken, setAccessToken } from "../../services/auth";
import Router from 'next/router'
import clsx from 'clsx'

import { 
    TextField,
    Button,
    Input,
    FilledInput,
    OutlinedInput,
    InputAdornment,
    IconButton,
    FormControl,
    InputLabel,
    FormHelperText
} from "@material-ui/core"

import {
    Visibility,
    VisibilityOff
} from '@material-ui/icons'


const login = async (email, password) => {
    const request = await axios.post('http://localhost:3333/sessions', {
        email,
        password
    })
    const { token }  = request.data
    return token
}

async function handleSubmit(e, email, password) {
    e.preventDefault();

    try {
        const access_token = await login(email, password)
        setAccessToken(access_token)
        localStorage.setItem('token', access_token)
        window.location.href = '/'
        // ../components/layout/AuthModal/LoginTab.js
        // const user = api.get() ;; qual o usuário
        // signIn(userResponse.data, tokenResponse.data)

    } catch (error) {
        console.table(error)
    }

}

export default function LoginForm() {

    const [loginError, setLoginError] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="App">
            <form className="form">
                <h2 style={{marginBottom: 20}}>Sign In</h2>

                <FormControl variant="filled" fullWidth={true}>
                    <InputLabel htmlFor="frmEmail">E-mail</InputLabel>
                    <FilledInput
                        id="frmEmail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        style={{marginBottom: 15,  color: "#FFF"}}
                        labelWidth={50}
                        
                    />
                </FormControl>

                <FormControl variant="filled" fullWidth={true}>
                    <InputLabel htmlFor="frmPassword">Password</InputLabel>
                    <FilledInput
                        id="frmPassword"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            onMouseDown={(e) => e.preventDefault}
                            edge="end"
                            >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        }
                        labelWidth={77}
                        style={{marginBottom: 20, color: "#FFF"}}
                    />
                </FormControl>

                <Button 
                    color="primary" 
                    className="form__custom-button" 
                    variant="contained"
                    fullWidth={true}
                    onClick={(e) => handleSubmit(e, email, password)}>
                    Sign In
                </Button>
            </form>
            {loginError && <p style={{color: 'red'}}>{loginError}</p>}
        
            <style jsx>
                {`
                .App {
                    background-color: #444;
                    border-radius: 5px;
                    padding: 25px;
                    margin: 50px auto 0px auto;
                    max-width: 500px;
                }
                `}
            </style>
      </div> 
    )
}