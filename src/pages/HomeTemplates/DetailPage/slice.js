import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const fetchDetailMovie = createAsyncThunk(
  "fetchDetailMovie",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios({
        url: `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
        method: "GET",
        headers: {
          TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA4NyIsIkhldEhhblN0cmluZyI6IjIzLzAzLzIwMjYiLCJIZXRIYW5UaW1lIjoiMTc3NDIyNDAwMDAwMCIsIm5iZiI6MTc0NzI2NzIwMCwiZXhwIjoxNzc0Mzk2ODAwfQ.8AWlFkAkN_xwXppJe_FTgiJXS4WlItjxLy5olIf33HY",
        },
      });
      return response.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const detailReducer = createSlice({
  name: "detailReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDetailMovie.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchDetailMovie.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchDetailMovie.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default detailReducer.reducer;
