import axios from "axios";

// const API = axios.create({ baseURL: "http://localhost:3001" });

axios.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchPost = (id) => axios.get(`api/posts/${id}`);
export const fetchPosts = (page) => axios.get(`api/posts?page=${page}`);
export const fetchPostsByCreator = (name) =>
  axios.get(`posts/creator?name=${name}`);
export const fetchPostsBySearch = (searchQuery) =>
  axios.get(
    `api/posts/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`
  );
export const createPost = (newPost) => axios.post("api/posts", newPost);
export const likePost = (id) => axios.patch(`api/posts/${id}/likePost`);
export const comment = (value, id) =>
  axios.post(`api/posts/${id}/commentPost`, { value });
export const updatePost = (id, updatedPost) =>
  axios.patch(`api/posts/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`api/posts/${id}`);

export const signIn = (formData) => axios.post("api/user/signin", formData);
export const signUp = (formData) => axios.post("api/user/signup", formData);
