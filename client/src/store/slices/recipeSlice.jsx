import { createSlice } from '@reduxjs/toolkit'
import { getRecipesList, getRecipeDetails, deleteRecipe, updateRecipe} from '../actions/recipeAction'


const initialState = {
    isLoading: false,
    alert: { isAlert: false, message: "", des: "" },
    recipes: [],
    recipesSearch: [],
    recipeDetails: {}
}





export const counterSlice = createSlice({



    name: 'recipe',
    initialState,

    reducers: {


        emptyBookAlert: (state, action) => {
            state.alert = { isAlert: false, message: "" }
        },

        searchBookList: (state, action) => {
            const { searchQuery } = action.payload;
            state.recipesSearch = state.recipes?.filter((recipe) =>
                recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        },


        getAllBooks: (state, action) => {
            state.recipesSearch = state.recipes
        },






    },


    extraReducers: (builder) => {

        // getAllRecipes
        builder.addCase(getRecipesList.pending, (state, action) => {
            console.log("pendinggggg")
            state.isLoading = true;
        })
        builder.addCase(getRecipesList.fulfilled, (state, action) => {
            console.log("fulfilleddddddddddddd", action.payload)
            state.isLoading = false;
            state.recipes = action.payload?.recipes;
            state.recipesSearch = action.payload?.recipes;

        })
        builder.addCase(getRecipesList.rejected, (state, action) => {
            console.log("rejectedddddddd", action.payload)
            state.isLoading = false;
        })




        // get Recipe Details
        builder.addCase(getRecipeDetails.pending, (state, action) => {
            console.log("pendinggggg")
            state.isLoading = true;
        })
        builder.addCase(getRecipeDetails.fulfilled, (state, action) => {
            console.log("fulfilleddddddddddddd", action.payload)
            state.isLoading = false;
            state.recipeDetails = action.payload?.recipe;
        })
        builder.addCase(getRecipeDetails.rejected, (state, action) => {
            console.log("rejectedddddddd", action.payload)
            state.isLoading = false;
        })




        // delete Recipe
        builder.addCase(deleteRecipe.pending, (state, action) => {
            console.log("pendinggggg")
            state.isLoading = true;
        })
        builder.addCase(deleteRecipe.fulfilled, (state, action) => {
            console.log("fulfilleddddddddddddd", action.payload)
            state.isLoading = false;

        })
        builder.addCase(deleteRecipe.rejected, (state, action) => {
            console.log("rejectedddddddd", action.payload)
            state.isLoading = false;
        })








        // checkout book / make Reservation




        builder.addCase(updateRecipe.pending, (state, action) => {
            console.log("pendinggggg")
            state.isLoading = true;
        })
        builder.addCase(updateRecipe.fulfilled, (state, action) => {
            console.log("fulfilleddddddddddddd", action.payload)
            state.isLoading = false;
        })
        builder.addCase(updateRecipe.rejected, (state, action) => {
            console.log("rejectedddddddd", action.payload)
            state.isLoading = false;
        })


    }



})





export const { emptyBookAlert, searchBookList, getAllBooks } = counterSlice.actions

export default counterSlice.reducer