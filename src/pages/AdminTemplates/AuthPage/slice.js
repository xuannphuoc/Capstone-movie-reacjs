import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { data } from "react-router-dom";
import api from "../../../services/apiServices";

const adminInfo = localStorage.getItem("ADMIN_INFO")
  ? JSON.parse(localStorage.getItem("ADMIN_INFO"))
  : null;

const initialState = {
  loading: false,
  data: adminInfo,
  error: null,
};

export const authenLogin = createAsyncThunk(
  "authenLogin",
  async (user, { rejectWithValue }) => {
    try {
      // const response = await axios({
      //   url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      //   method: "POST",
      //   data: user,
      //   headers: {
      //     TokenCybersoft:
      //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA4NyIsIkhldEhhblN0cmluZyI6IjIzLzAzLzIwMjYiLCJIZXRIYW5UaW1lIjoiMTc3NDIyNDAwMDAwMCIsIm5iZiI6MTc0NzI2NzIwMCwiZXhwIjoxNzc0Mzk2ODAwfQ.8AWlFkAkN_xwXppJe_FTgiJXS4WlItjxLy5olIf33HY",
      //   },
      // });

      const response = await api.post(`QuanLyNguoiDung/DangNhap`, user);
      const authInfo = response.data.content;

      // Check permission user
      if (
        authInfo.maLoaiNguoiDung === "KhachHang" ||
        authInfo.maLoaiNguoiDung === "khachHang"
      ) {
        // lock
        return rejectWithValue({
          response: {
            data: {
              content: "Khong co quyen truy cap!",
            },
          },
        });
      }

      // local storage
      localStorage.setItem("ADMIN_INFO", JSON.stringify(authInfo));

      return authInfo;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authReducer = createSlice({
  name: "authReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authenLogin.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(authenLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });

    builder.addCase(authenLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default authReducer.reducer;
