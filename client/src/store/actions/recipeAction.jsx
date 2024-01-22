import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { server_url } from "../../config";




export const getRecipesList = createAsyncThunk('recipe/getRecipesList', async (info, { rejectWithValue }) => {
    try {
        const { data } = await axios.get(`${server_url}/recipe`);
        return data;
    } catch (error) {

        return rejectWithValue(error.response?.data);
    }
})



export const getRecipeDetails = createAsyncThunk('recipe/getRecipeDetails', async (id, { rejectWithValue }) => {
    try {
        const { data } = await axios.get(`${server_url}/recipe/${id}`);
        return data;
    } catch (error) {

        return rejectWithValue(error.response?.data);
    }
})


export const deleteRecipe = createAsyncThunk('recipe/deleteRecipe', async (id, { rejectWithValue }) => {
    try {
        const { data } = await axios.delete(`${server_url}/recipe/${id}`);
        return data;
    } catch (error) {

        return rejectWithValue(error.response?.data);
    }
})



export const updateRecipe = createAsyncThunk('recipe/updateRecipe', async (info, { rejectWithValue }) => {
    try {
        const { data } = await axios.put(`${server_url}/recipe`, info);
        return data;
    } catch (error) {

        return rejectWithValue(error.response?.data);
    }
})


