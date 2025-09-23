import { configureStore } from "@reduxjs/toolkit";
// import listMovieReducer from "./../pages/HomeTemplates/ListMoviePage/slice";
import listMovieReducer from "@/pages/HomeTemplates/ListMoviePage/slice";
import detailReducer from "../pages/HomeTemplates/DetailPage/slice";
import authReducer from "../pages/AdminTemplates/AuthPage/slice";
import addUserReducer from "./../pages/AdminTemplates/AddUserPage/slice";

export const store = configureStore({
  reducer: {
    listMovieReducer,
    detailReducer,
    authReducer,
    addUserReducer,
  },
});
