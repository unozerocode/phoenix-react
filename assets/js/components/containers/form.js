import React from "react";
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import Header from '../header-simple'
import { Alert, AlertTitle } from '@material-ui/lab';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   title: '',
   subtitle: '',
   image: '',
   link: '',
   author: '',
   success: false
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
    blogs: {
      title: this.state.title,
      subtitle: this.state.subtitle,
      image: this.state.image,
      link: this.state.link,
      author: this.state.author
    }
  })
  .then(response => {

            this.setState({
                success: true,
            })
            return response;
        }).catch ((err) => {
            console.log("Exception: " + err)
        })

  }

  render() {
const alert = <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                this.setState({
                  success: false,
                })
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
        <AlertTitle>Success</AlertTitle>
This is a success alert — check it out!
        </Alert>;

    return (

      <div>
      <Header link-to="home"/>
      <section className="container">
        <div className="row justify-content-center" >
          <form noValidate autoComplete="off" onSubmit={this.handleSubmit} className="container row justify-content-center">
              <div className="col-12 col-lg-10 p-3">

                <TextField className="col-12" id="id-title" label="Title" variant="outlined" type="text" value = {this.state.title} onChange = {this.handleTitle} required/>
              </div>
              <div className="col-12 p-3 col-lg-10 ">
                <TextField className="col-12" id="id-subtitle" label="Subitle" variant="outlined" type="text" value = {this.state.subtitle} onChange = {this.handleSubtitle} required/>
              </div>
              <div className="col-12 p-3 col-lg-10 ">
               <TextField className="col-12" id="id-url" label="Enter Image URL" variant="filled" type="text" value = {this.state.image} onChange = {this.handleImage} required/>
              </div>
              <div className="col-12 p-3 col-lg-10 ">
               <TextField className="col-12" id="id-link" label="Link" variant="filled" type="text" value = {this.state.link} onChange = {this.handleLink} required/>
              </div>
              <div className="col-12 p-3 col-lg-10 " >
               <TextField className="col-12" id="id-author" label="Author" variant="filled" type="text" value = {this.state.author} onChange = {this.handleAuthor} required/>
              </div>
              <div className="col-12 p-3 d-flex justify-content-center" >
                <button
                    type="submit"
                    value="Submit"
                    className="btn btn-primary"
                  >
                  Submit
                  </button>
              </div>

        </form>
        </div>
      </section>
      {this.state.success ? alert : null}
      </div>
    )
  }
}
export default Form
