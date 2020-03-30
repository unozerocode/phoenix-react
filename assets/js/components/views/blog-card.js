import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


class BlogCard extends React.Component {
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
        <CardActions>
          <a href={this.props.link}> <Button size="small" variant="contained" color="primary">
            Share
          </Button></a>
        </CardActions>
      </Card>
    )
  }
}
export default BlogCard
