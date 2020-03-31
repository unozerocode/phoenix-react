import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import axios from "axios"



class BlogCard extends React.Component {
constructor(props){
  super(props);
  this.handleDelete = this.handleDelete.bind(this)
}
handleDelete(event){
  event.preventDefault();
  axios.delete('http://localhost:4000/api/blogs/'+id)
  .then(response => {

        alert("Blog id: "+ id + " Eliminado")
          return response;
      }).catch ((err) => {
          console.log("Exception: " + err)
      })
  }

  render() {
    return (

      <Card style={{maxWidth:`345px`,margin:`1rem`}}  className="shadow rounded" >
        <CardActionArea>
          <CardMedia
            style={{height:`240px`, }}
            image={this.props.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {this.props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.props.subtitle}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              By {this.props.author}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="d-flex justify-content-around">
          <a href={this.props.link}> <Button size="small" variant="contained" color="primary">
            Share
          </Button></a>
        <div >
          <Fab className="m-2" size="small" color="secondary" aria-label="add" style={{outline: "none"}} onClick={this.handleDelete}>
              <DeleteIcon />
            </Fab>
            <Fab size="small" color="secondary" aria-label="add" style={{outline: "none"}}>
                <EditIcon />
              </Fab>
        </div>
        </CardActions>
      </Card>
    )
  }
}
export default BlogCard
