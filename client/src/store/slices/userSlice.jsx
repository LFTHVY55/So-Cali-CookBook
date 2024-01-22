import { createSlice } from '@reduxjs/toolkit'
import { registerUser, loginUser, accountDetails } from '../actions/userAction'


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
      state.alert = { isAlert: false, message: "" }
      state.isLoggedIn = false
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
      state.token = action.payload?.data?.token;

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
      state.token = action.payload?.data?.token;

    })
    builder.addCase(loginUser.rejected, (state, action) => {
      console.log("rejectedddddddddddd", action.payload)

      state.isLoading = false;
      state.alert = { isAlert: true, message: action.payload?.message };
    })





    // account details


    builder.addCase(accountDetails.pending, (state, action) => {
      state.isLoading = true;
    })
    builder.addCase(accountDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.currentUser = action.payload?.data;

    })
    builder.addCase(accountDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.alert = { isAlert: true, message: action.payload?.message };

    })


  }



})






export const { emptyAlert, logout } = postSlice.actions

export default postSlice.reducer