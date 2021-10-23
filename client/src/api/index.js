import axios from "axios";

// const API = axios.create({ baseURL: "http://localhost:5000" });

axios.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchPost = (id) => axios.get(`/posts/${id}`);
export const fetchPosts = (page) => axios.get(`/posts?page=${page}`);
export const fetchPostsByCreator = (name) =>
  axios.get(`/posts/creator?name=${name}`);
export const fetchPostsBySearch = (searchQuery) =>
  axios.get(
    `/posts/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`
  );
export const createPost = (newPost) => axios.post("/posts", newPost);
export const likePost = (id) => axios.patch(`/posts/${id}/likePost`);
export const comment = (value, id) =>
  axios.post(`/posts/${id}/commentPost`, { value });
export const updatePost = (id, updatedPost) =>
  axios.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`/posts/${id}`);

export const signIn = (formData) => axios.post("/user/signin", formData);
export const signUp = (formData) => axios.post("/user/signup", formData);
