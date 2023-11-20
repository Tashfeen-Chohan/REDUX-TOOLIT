import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deletePost, selectAllPosts } from "../features/postSlice";

const SinglePost = () => {
  const { id } = useParams();
  const posts = useSelector(selectAllPosts);
  const singlePost = posts.filter((post) => post.id === id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <section className="bg-slate-100 w-[90%] mx-auto shadow-xl py-5 px-3 rounded mt-10 max-w-4xl md:p-10">
        <h1 className="font-bold text-2xl pb-3">{singlePost[0].title}</h1>
        <p>{singlePost[0].content}</p>
        <p className="pt-3">
          by: <b className="italic">{singlePost[0].author}</b>
        </p>
        <p>
          category: <b className="italic">{singlePost[0].category}</b>
        </p>
        <div className="flex justify-end items-center gap-2 mt-4">
          <button
            onClick={() => {
              navigate("/");
            }}
            className="bg-[#5272F2] text-slate-100 py-1 px-3 rounded shadow-xl"
          >
            Back
          </button>
          <button className="bg-[#FFC436] py-1 px-3 rounded shadow-xl">
            Update
          </button>
          <button
            onClick={() => {
              dispatch(deletePost(id)), navigate("/");
            }}
            className="bg-[#F24C3D] text-slate-100 py-1 px-3 rounded shadow-xl"
          >
            Delete
          </button>
        </div>
      </section>
    </div>
  );
};

export default SinglePost;
