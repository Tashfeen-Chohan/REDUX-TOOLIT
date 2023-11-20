import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// CREATE POST ACTION
export const createPost = createAsyncThunk(
  "createPost",
  async (data, { rejectWithValue }) => {
    try {
      const resp = await axios.post("https://655af2b9ab37729791a85714.mockapi.io/CRUD", data)
      return resp.data
    } catch (error) {
      rejectWithValue(error.message)
    }
  }
);

// READ POST ACTION
export const readPosts = createAsyncThunk("readPosts", async () => {
  try {
    const resp = await axios.get("https://655af2b9ab37729791a85714.mockapi.io/CRUD")
    return resp.data
  } catch (error) {
    console.log(error.message)
  }
})

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
      // CREATE POST PROMISE HANDLING
      .addCase(createPost.pending, (state) => {
        state.loading = true;
      })

      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.push(action.payload)
      })

      .addCase(createPost.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      // READ POST PROMISE HANDLING
      .addCase(readPosts.pending, (state) => {
        state.loading = true;
      })

      .addCase(readPosts.fulfilled, (state, action) => {
        state.loading = false
        state.posts = action.payload
      })

      .addCase(readPosts.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
});

export default postSlice.reducer;
