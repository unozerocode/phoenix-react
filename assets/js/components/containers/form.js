import React from "react";
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import Header from '../header-simple'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

   title: '',
   subtitle: '',
   image: '',
   link: '',
   author: ''
 };

    this.handleTitle = this.handleTitle.bind(this)
    this.handleSubtitle = this.handleSubtitle.bind(this)
    this.handleImage = this.handleImage.bind(this)
    this.handleLink = this.handleLink.bind(this)
    this.handleAuthor = this.handleAuthor.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitle(event) {
  this.setState({ title: event.target.value })
}
handleSubtitle(event) {
  this.setState({ subtitle: event.target.value })
}
handleImage(event) {
  this.setState({ image: event.target.value })
}
handleLink(event) {
  this.setState({ link: event.target.value })
}
handleAuthor(event) {
  this.setState({ author: event.target.value })
}

  handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:4000/api/blogs', {
    data: {
      title: 'Esto es un post nuevo',
      subtitle: 'cuerpo de este post. Me gusta la librería Axios!!',
      image: 'aasda',
      link: 'asdasdas',
      author: 'asdasdasdjyahsgdas'
    }
  });
  }
  render() {
    return (

      <div>
      <Header/>
      <section className="container">
        <div className="row justify-content-center">
          <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
              <div className="col-12 p-3">

                <TextField id="id-title" label="Title" variant="outlined" type="text" value = {this.state.title} onChange = {this.handleTitle} required/>
              </div>
              <div className="col-12 p-3">
                <TextField id="id-subtitle" label="Subitle" variant="outlined" type="text" value = {this.state.subtitle} onChange = {this.handleSubtitle} required/>
              </div>
              <div className="col-12 p-3">
               <TextField id="id-url" label="Enter Image URL" variant="filled" type="text" value = {this.state.image} onChange = {this.handleImage} required/>
              </div>
              <div className="col-12 p-3">
               <TextField id="id-link" label="Link" variant="filled" type="text" value = {this.state.link} onChange = {this.handleLink} required/>
              </div>
              <div className="col-12 p-3" >
               <TextField id="id-author" label="Author" variant="filled" type="text" value = {this.state.author} onChange = {this.handleAuthor} required/>
              </div>
              <button
                  type="submit"
                  value="Submit"
                  className="btn btn-primary"
                >
                Submit
                </button>
        </form>
        </div>
      </section>
      </div>
    )
  }
}
export default Form
