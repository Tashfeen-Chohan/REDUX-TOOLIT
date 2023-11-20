import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// CREATE POST ACTION
export const createPost = createAsyncThunk(
  "createPost",
  async (data, { rejectWithValue }) => {
    try {
      await axios.post("https://655af2b9ab37729791a85714.mockapi.io/CRUD", data)
    } catch (error) {
      rejectWithValue(error.message)
    }
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },

  reducers: {

  },

  extraReducers(builder){
    builder
      .addCase(createPost.pending, (state) => {
        state.loading = true;
      })

      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.push(action.payload)
      })

      .addCase(createPost.rejected, (state, action) => {
        state.loading = false
        state.posts = action.payload
      })
  }
});

export default postSlice.reducer;
