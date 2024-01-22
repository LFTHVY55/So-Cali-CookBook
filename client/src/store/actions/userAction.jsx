import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { server_url } from "../../config";

export const loginUser = createAsyncThunk('user/loginUser', async (userInfo, { rejectWithValue }) => {
    try {
        const data = await axios.post(`${server_url}/users/login`, userInfo);
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data);
    }
})


export const registerUser = createAsyncThunk('user/registerUser', async (userInfo, { rejectWithValue }) => {
    try {
        const data = await axios.post(`${server_url}/users/register`, userInfo);
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data);
    }
})


export const accountDetails = createAsyncThunk('user/accountDetails', async (headers, { rejectWithValue }) => {
    try {
        const data = await axios.get(`${server_url}/users/me`, {headers:headers});
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data);
    }
})

