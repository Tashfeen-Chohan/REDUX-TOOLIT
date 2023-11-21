import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// CREATE POST ACTION
export const createPost = createAsyncThunk(
  "createPost",
  async (data) => {
    try {
      const resp = await axios.post("https://655af2b9ab37729791a85714.mockapi.io/CRUD", data)
      return resp.data
    } catch (error) {
      console.log(error.message)
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

// DELETE POST ACTION
export const deletePost = createAsyncThunk("deletePost", async (id) => {
  try {
    const response = await axios.delete(`https://655af2b9ab37729791a85714.mockapi.io/CRUD/${id}`)
    return response.data
  } catch (error) {
    console.log(error.message)
  }
})

// UPDATE POST ACTION
export const updatePost = createAsyncThunk("updatePost", async (data) => {
  try {
    const response = await axios.put(`https://655af2b9ab37729791a85714.mockapi.io/CRUD/${data.id}`, data)
    return response.data
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
    search: []
  },

  reducers: {
    searchPost: (action, state) => {
      state.search = action.payload
    }
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

      // DELETE POST PROMISE HANDLING
      .addCase(deletePost.pending, (state) => {
        state.loading = true;
      })

      .addCase(deletePost.fulfilled, (state, action) => {
        state.loading = false
        const {id} = action.payload
        if (id) {
          state.posts = state.posts.filter(post => post.id !== id)
        }
      })

      .addCase(deletePost.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      // UPDATE POST PROMISE HANDLING
      // .addCase(updatePost.pending, (state) => {
      //   state.loading = true
      // })

      // .addCase(updatePost.fulfilled, (state, action) => {
      //   state.loading = false
      //   state.posts = state.posts.map((post) => {
      //     post.id === action.payload.id ? action.payload : post
      //   })
      // })

      // .addCase(updatePost.rejected, (state, action) => {
      //   state.loading = false
      //   state.error = action.payload
      // })
  }
});

export default postSlice.reducer;
export const { searchPost } = postSlice.actions
export const selectAllPosts = (state) => state.posts.posts
export const selectLoading = (state) => state.posts.loading
