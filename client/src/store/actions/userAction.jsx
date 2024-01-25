import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { server_url } from "../../config";

export const loginUser = createAsyncThunk('user/loginUser', async (userInfo, { rejectWithValue }) => {
    try {
        const data = await axios.post(`${server_url}/user/login`, userInfo);
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data);
    }
})


export const registerUser = createAsyncThunk('user/registerUser', async (userInfo, { rejectWithValue }) => {
    try {
        const data = await axios.post(`${server_url}/user`, userInfo);
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data);
    }
})


export const accountDetails = createAsyncThunk('user/accountDetails', async (id, { rejectWithValue }) => {
    try {
        const data = await axios.get(`${server_url}/recipe/accountDetail/${id}`);
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data);
    }
})

