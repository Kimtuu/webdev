const apiUrl = "https://jsonplaceholder.typicode.com/posts";
// const blogId = 99;

const blog = {
  title: "New Blog",
  body: "This is the content of the new blog.",
  userId: 1,
};

// const addBlog = async () => {
//   const response = await fetch(apiUrl, {
//     method: "POST",
//     body: JSON.stringify(blog),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   const json = await response.json();
//   console.log("New Blog Added", json);
// };

// fetch blogs

// const fetchBlogs = async () => {
//   const response = await fetch(apiUrl);
//   const data = await response.json();
//   console.log("All Blogs", data);
// };

// const fetchBlog = async (id) => {
//   const response = await fetch(`${apiUrl}/${id}`);
//   const data = await response.json();
//   console.log("Single blog", data);
// };

const blogIdToDelete = 99; // Replace with the desired blog ID for testing

const deleteBlog = async (blogId) => {
  await fetch(`${apiUrl}/${blogId}`, {
    method: "DELETE",
  });

  console.log("Blog deleted successfully");
};

// Example Usage
deleteBlog(blogIdToDelete);

/*---------Function calls------------ */
// example usage

// addBlog();

// fetchBlogs();

// fetchBlog(blogId);
