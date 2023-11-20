import React, { useState } from "react";
import { FaPencilAlt, FaUser } from "react-icons/fa";
import { BiSolidBookContent, BiSolidCategory } from "react-icons/bi";
import { MdSubtitles } from "react-icons/md";
import { useDispatch } from "react-redux";
import { createPost } from "../features/postSlice";

const Create = () => {
  const dispatch = useDispatch()
  const [post, setPost] = useState({
    title: "",
    author: "",
    content: "",
    category: "",
    date: ""
  });

  const {title, author, content, category} = post;
  const canSave = Boolean(title) && Boolean(author) && Boolean(content) && Boolean(category)


  function handleChange(e) {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(createPost(post))
    setPost({
      title: "",
      author: "",
      content: "",
      category: ""
    })
  }

  
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div className="flex justify-center items-center flex-col mt-[-100px] w-[90%] shadow-xl pb-10 md:max-w-xl">
        <h1 className="font-bold text-3xl text-slate-800 my-7">ADD POST</h1>
        <form onSubmit={handleSubmit} className="w-full flex justify-center items-center flex-col">
          {/* POST TITLE */}
          <div className="flex justify-center items-center gap-5 w-[85%] mx-auto">
            <label htmlFor="title" className="text-xl">
              {/* <MdSubtitles /> */}
              <MdSubtitles />
            </label>
            <input
              id="title"
              type="text"
              placeholder="Post Title"
              name="title"
              value={title}
              onChange={handleChange}
              className="py-[1px] px-2 border-b-2 border-black w-full"
            />
          </div>

          {/* POST AUTHOR */}
          <div className="flex justify-center items-center gap-5 w-[85%] mx-auto mt-3">
            <label htmlFor="author" className="text-xl">
              <FaUser />
            </label>
            <input
              id="author"
              type="text"
              placeholder="Post Author"
              name="author"
              value={author}
              onChange={handleChange}
              className="py-[1px] px-2 border-b-2 border-black w-full"
            />
          </div>

          {/* POST CATEOGRY */}
          <div className="mt-3 flex justify-center items-center gap-5 w-[85%] mx-auto">
            <label htmlFor="category" className="text-xl">
              <BiSolidCategory />
            </label>
            <input
              id="category"
              type="text"
              placeholder="Post Category"
              name="category"
              value={category}
              onChange={handleChange}
              className="py-1 px-2 border-b-2 border-black w-full"
            />
          </div>

          {/* POST CONTENT */}
          <div className="mt-3 flex justify-center items-start gap-5 w-[85%] mx-auto">
            <label htmlFor="content" className="text-xl">
              <BiSolidBookContent />
            </label>
            <textarea
              id="content"
              name="content"
              placeholder="Post Content"
              cols="30"
              rows="10"
              value={content}
              onChange={handleChange}
              className="p-1 border border-b-2 border-black w-full h-20 md:h-28"
            ></textarea>
          </div>

          <button
            className="disabled:bg-slate-600 hover:bg-slate-800 mx-auto transition-colors duration-300 bg-slate-700 py-1 px-5 w-[85%] text-white rounded shadow-xl mt-7"
            type="submit"
            disabled={!canSave}
          >
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
