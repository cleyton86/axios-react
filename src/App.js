import './App.css';

import axios from 'axios';
import React from "react";

//* IMPORT AXIOS HOOK
// import { useAxios } from "use-axios-client";

//* GET BASE URL EXAMPLE
const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

//* POST/PUT/DELETE BASE URL EXAMPLE
// const baseURL = "https://jsonplaceholder.typicode.com/posts";

//* CREATE AN AXIOS INSTANCE
// const client = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com/posts" 
// });

export default function App() {
  const [post, setPost] = React.useState(null);
  
  //! ERROR SIMULATE
  // const [error, setError] = React.useState(null);

  //? AXIOS HOOK SAMPLE
  // const { post, error, loading } = useAxios({
  //   url: "https://jsonplaceholder.typicode.com/posts/1"
  // });

  // * GET EXAMPLE
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  // * POST EXAMPLE
  // React.useEffect(() => {
  //   axios.get(`${baseURL}/1`).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

  // function createPost() {
  //   axios
  //     .post(baseURL, {
  //       title: "Hello World!",
  //       body: "This is a new post."
  //     })
  //     .then((response) => {
  //       setPost(response.data);
  //     });
  // }

  // * PUT EXAMPLE
  // React.useEffect(() => {
  //   axios.get(`${baseURL}/1`).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

  // function updatePost() {
  //   axios
  //     .put(`${baseURL}/1`, {
  //       title: "Hello World!",
  //       body: "This is an updated post."
  //     })
  //     .then((response) => {
  //       setPost(response.data);
  //     });
  // }

  // * DELETE EXAMPLE
  // React.useEffect(() => {
  //   axios.get(`${baseURL}/1`).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);
  
  // function deletePost() {
  //   axios
  //     .delete(`${baseURL}/1`)
  //     .then(() => {
  //       alert("Post deleted!");
  //       setPost(null)
  //     });
  // }

  //! ERROR SIMULATE
  //? To simulate an error, you'll send a request to an API endpoint that doesn't exist: /posts/asdf.
  // React.useEffect(() => {
  //   // invalid url will trigger an 404 error
  //   axios.get(`${baseURL}/asdf`).then((response) => {
  //     setPost(response.data);
  //   }).catch(error => {
  //     setError(error);
  //   });
  // }, []);

  // * USE AXIOS INSTANCE EXAMPLE
  // React.useEffect(() => {
  //   client.get("/1").then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

  // function deletePost() {
  //   client
  //     .delete("/1")
  //     .then(() => {
  //       alert("Post deleted!");
  //       setPost(null)
  //     });
  // }

  
  // * USE ASYNC-AWAIT SYNTAX EXAMPLE
  // React.useEffect(() => {
  //   async function getPost() {
  //     const response = await client.get("/1");
  //     setPost(response.data);
  //   }
  //   getPost();
  // }, []);

  // async function deletePost() {
  //   await client.delete("/1");
  //   alert("Post deleted!");
  //   setPost(null);
  // }
  

  // * GET RETURN EXAMPLE
  if (!post) return null;

  // * POST/PUT/DELETE RETURN EXAMPLE
  // if (!post) return "No post!"

  //! ERROR SIMULATE RETURN
  // if (error) return `Error: ${error.message}`;
  // if (!post) return "No post!"

  // ? GET HOOK RETURN EXAMPLE
  // if (loading || !post) return "Loading...";
  // if (error) return "Error!";

  return (
    <div className="App">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      {/* <button onClick={createPost}>Create Post</button> */}
      {/* <button onClick={updatePost}>Update Post</button> */}
      {/* <button onClick={deletePost}>Delete Post</button> */}
    </div>
  );
}