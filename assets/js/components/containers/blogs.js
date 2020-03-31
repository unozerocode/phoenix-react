import React from "react"
import axios from "axios"
import BlogCard from "../views/blog-card"
class Blogs extends React.Component {
  constructor() {
      super();
      this.state = { blogs: [] };
    }
    componentWillMount() {
      axios.get('http://localhost:4000/api/blogs')
        .then(response => {
          this.setState({ blogs: response.data.blogs });
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  render() {
    const posts = this.state.blogs.map((blog, index) =>
      <BlogCard
        key = { index }
        title = { blog.title }
        subtitle = { blog.subtitle }
        image = { blog.image }
        link = { blog.link }
        author = { blog.author }
      />
    )
    return (
      <div className="row justify-content-center">
      {posts}
      </div>
    )
  }
}
export default Blogs
