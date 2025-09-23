import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import api from "../../../services/apiServices";
import api from "@/services/apiServices";

const initialState = {
  loading: null,
  data: null,
  error: null,
};

export const addUserService = createAsyncThunk(
  "addUserService",
  async (user, { rejectWithValue }) => {
    try {
      //   const response = await axios({
      //     url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      //     method: "POST",
      //     data: user,
      //     headers: {
      //       Authorization: localStorage.getItem("ADMIN_INFO")
      //         ? "Bearer " +
      //           JSON.parse(localStorage.getItem("ADMIN_INFO")).accessToken
      //         : "",
      //       TokenCybersoft:
      //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA4NyIsIkhldEhhblN0cmluZyI6IjIzLzAzLzIwMjYiLCJIZXRIYW5UaW1lIjoiMTc3NDIyNDAwMDAwMCIsIm5iZiI6MTc0NzI2NzIwMCwiZXhwIjoxNzc0Mzk2ODAwfQ.8AWlFkAkN_xwXppJe_FTgiJXS4WlItjxLy5olIf33HY",
      //     },
      //   });

      const response = await api.post(`QuanLyNguoiDung/ThemNguoiDung`, user);
      return response.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const addUserReducer = createSlice({
  name: "addUserReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addUserService.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addUserService.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(addUserService.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default addUserReducer.reducer;
