import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePost,
  readPosts,
  selectAllPosts,
  selectLoading,
} from "../features/postSlice";
import { useNavigate } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const loading = useSelector(selectLoading);
  const [id, setId] = useState();
  const navigate = useNavigate();

  const allPosts = posts.map((post) => (
    <section
      key={post.id}
      className="bg-slate-100 w-[90%] mx-auto shadow-xl py-5 px-3 rounded mb-10"
    >
      <h1 className="font-bold text-2xl pb-3">{post.title}</h1>
      <p className="content">{post.content}</p>
      <p className="pt-3">
        by: <b className="italic">{post.author}</b>
      </p>
      <p>
        category: <b className="italic">{post.category}</b>
      </p>
      <div className="flex justify-end items-center gap-2 mt-4">
        <button
          onClick={() => {
            setId(post.id), navigate(`/singlePost/${post.id}`);
          }}
          className="bg-[#5272F2] text-slate-100 py-1 px-3 rounded shadow-xl"
        >
          View
        </button>
        <button onClick={() => {
          navigate(`/editPost/${post.id}`)
        }} className="bg-[#FFC436] py-1 px-3 rounded shadow-xl">
          Update
        </button>
        <button onClick={() => dispatch(deletePost(post.id))} className="bg-[#F24C3D] text-slate-100 py-1 px-3 rounded shadow-xl">
          Delete
        </button>
      </div>
    </section>
  ));

  useEffect(() => {
    dispatch(readPosts());
  }, []);

  return (
    <div className="flex justify-center items-center flex-col mt-7">
      <h1 className="font-bold text-2xl mb-5 md:text-3xl">ALL POSTS</h1>
      <div className={"grid grid-cols-1 w-full md:max-w-5xl md:grid-cols-2 md:mx-auto md:mt-8"}>
        {allPosts.length === 0 ? <p className="text-center text-red-600 font-bold ">No posts found!</p> : allPosts}
      </div>
    </div>
  );
};

export default Read;
