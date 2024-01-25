import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import recipeReducer from './slices/recipeSlice';
import userReducer from './slices/userSlice';


const reducers = combineReducers({
    recipe: recipeReducer,
    user: userReducer,

});


const persistConfig = {
    key: 'root',
    storage,
    useProxies: false 
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    // middleware: [],
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, "user/registerUser/fulfilled" , "user/loginUser/fulfilled" , "user/accountDetails/fulfilled"],
      },
    }),    
});







export default store;