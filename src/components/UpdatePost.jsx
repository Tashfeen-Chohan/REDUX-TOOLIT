import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { BiSolidBookContent, BiSolidCategory } from "react-icons/bi";
import { MdSubtitles } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { selectAllPosts, updatePost } from "../features/postSlice";

const UpdatePost = () => {
  const [data, setData] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const posts = useSelector(selectAllPosts);

  useEffect(() => {
    if (id) {
      const updatePost = posts.filter((post) => post.id === id);
      setData(updatePost[0]);
    }
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function handleUpdate(e) {
    e.preventDefault();
    dispatch(updatePost(data))
    navigate("/");
  }

  const {title, author, content, category} = data;
  const canSave = Boolean(title) && Boolean(author) && Boolean(content) && Boolean(category)


  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div className="flex justify-center items-center flex-col mt-[-100px] w-[90%] shadow-xl pb-10 md:max-w-xl">
        <h1 className="font-bold text-3xl text-slate-800 my-7">UPDATE POST</h1>
        <form
          onSubmit={handleUpdate}
          className="w-full flex justify-center items-center flex-col"
        >
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
              value={data && data.title}
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
              value={data && data.author}
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
              value={data && data.category}
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
              value={data && data.content}
              onChange={handleChange}
              className="p-1 border border-b-2 border-black w-full h-20 md:h-28"
            ></textarea>
          </div>

          <button
            className="disabled:bg-slate-500 hover:bg-slate-800 mx-auto transition-colors duration-300 bg-slate-700 py-1 px-5 w-[85%] text-white rounded shadow-xl mt-7"
            type="submit"
            disabled={!canSave}
          >
            UPDATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePost;
