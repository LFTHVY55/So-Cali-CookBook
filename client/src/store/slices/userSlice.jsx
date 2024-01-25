import { createSlice } from '@reduxjs/toolkit'
import { registerUser, loginUser, accountDetails } from '../actions/userAction'
import { deleteRecipe } from '../actions/recipeAction'


const initialState = {

  isLoading: false,
  alert: { isAlert: false, message: "" },
  currentUser: {},
  token: null,
  isLoggedIn: false

}





export const postSlice = createSlice({



  name: 'user',

  initialState,


  reducers: {

    emptyAlert: (state, action) => {
      state.alert = { isAlert: false, message: "" }
    },

    logout: (state, action) => {
      state.isLoggedIn = false
      state.currentUser = {}
      state.token = null
    }


  },



  extraReducers: (builder) => {

    // register
    builder.addCase(registerUser.pending, (state, action) => {
      console.log("pendinggggg")
      state.isLoading = true;
    })
    builder.addCase(registerUser.fulfilled, (state, action) => {
      console.log("fulfilleddddddddddddd", action.payload)
      state.isLoading = false;
      state.isLoggedIn = true;

    })
    builder.addCase(registerUser.rejected, (state, action) => {
      console.log("rejectedddddddddddd", action.payload)

      state.isLoading = false;
      state.alert = { isAlert: true, message: action.payload?.message };
    })




    // login

    builder.addCase(loginUser.pending, (state, action) => {
      console.log("pendinggggg")
      state.isLoading = true;
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      console.log("fulfilleddddddddddddd", action.payload)
      state.isLoading = false;
      state.isLoggedIn = true;
      state.currentUser = action.payload?.data?.user;

    })
    builder.addCase(loginUser.rejected, (state, action) => {
      console.log("rejectedddddddddddd", action.payload)
      state.isLoading = false;
    })





    // account details


    builder.addCase(accountDetails.pending, (state, action) => {
      state.isLoading = true;
    })
    builder.addCase(accountDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentUser = { ...state.currentUser, recipes: action.payload.data?.recipes }

    })
    builder.addCase(accountDetails.rejected, (state, action) => {
      state.isLoading = false;

    })



    // delete Recipe

    builder.addCase(deleteRecipe.fulfilled, (state, action) => {
      state.currentUser = { ...state.currentUser, recipes: state?.currentUser?.recipes?.filter(v => v.recipe_id !== action.payload?.recipe?.recipe_id) }

    })




  }



})






export const { emptyAlert, logout } = postSlice.actions

export default postSlice.reducer