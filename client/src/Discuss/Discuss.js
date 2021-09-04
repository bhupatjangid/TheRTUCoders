import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import "./Discuss.css"

export default function CustomizedTabs(props) {
  return (
    <div className="posts">
      <Grid style = {{display: "flex",justifyContent:"space-between", alignContent:"centre",alignItems:"centre", border: "1px solid black", backgroundColor : "gray", borderRadius : "0"}}>
        <h3 className="Experience" >
                 Latest Experience
        </h3>
        <Button style = {{borderRadius:'40%', margin:"10px"}}>
          <AddCircleIcon fontSize="large" />
          </Button>
    </Grid>
    <div className="post">
          <div className="post-top">
            <div className="post-heading">
              <Avatar alt="Remy Sharp" src="../asset/discorfd" />
              <Typography variant = "h6" className="post-title" >
                 post.title
              </Typography>
            </div>
            <div className="post-date">
              <p>
                nipun created on Augest 25 2021
              </p>
            </div>
          </div>
          <p className="post-body">
            post.body.substring(1,200)
            <a href = "">Read more</a>
          </p>
      <hr />
      </div>
      <div className="post">
          <div className="post-top">
            <div className="post-heading">
              <Avatar alt="Remy Sharp" src="../asset/discorfd" />
              <Typography variant = "h6" className="post-title" >
                 post.title
              </Typography>
            </div>
            <div className="post-date">
              <p>
                nipun created on June 14 2021
              </p>
            </div>
          </div>
          <p className="post-body">
            post.body.substring(1,200)
            <a href = "">Read more</a>
      </p>
      <hr />
      </div>
      <div className="post">
          <div className="post-top">
            <div className="post-heading">
              <Avatar alt="Remy Sharp" src="../asset/discorfd" />
              <Typography variant = "h6" className="post-title" >
                 post.title
              </Typography>
            </div>
            <div className="post-date">
              <p>
                nipun created on June 14 2021
              </p>
            </div>
          </div>
          <p className="post-body">
            post.body.substring(1,200)
            <a href = "">Read more</a>
      </p>
      <hr />
      </div>
      <div className="post">
          <div className="post-top">
            <div className="post-heading">
              <Avatar alt="Remy Sharp" src="../asset/discorfd" />
              <Typography variant = "h6" className="post-title" >
                 post.title
              </Typography>
            </div>
            <div className="post-date">
              <p>
                nipun created on June 14 2021
              </p>
            </div>
          </div>
          <p className="post-body">
            post.body.substring(1,200)
            <a href = "">Read more</a>
      </p>
      <hr />
      </div>
      <div className="post">
          <div className="post-top">
            <div className="post-heading">
              <Avatar alt="Remy Sharp" src="../asset/discorfd" />
              <Typography variant = "h6" className="post-title" >
                 post.title
              </Typography>
            </div>
            <div className="post-date">
              <p>
                nipun created on June 14 2021
              </p>
            </div>
          </div>
          <p className="post-body">
            post.body.substring(1,200)
          </p>
      <hr />
      </div>
      <div className="post">
          <div className="post-top">
            <div className="post-heading">
              <Avatar alt="Remy Sharp" src="../asset/discorfd" />
              <Typography variant = "h6" className="post-title" >
                 post.title
              </Typography>
            </div>
            <div className="post-date">
              <p>
                nipun created on June 14 2021
              </p>
            </div>
          </div>
          <p className="post-body">
            post.body.substring(1,200)
          </p>
      <hr />
      </div>
      <div className="post">
          <div className="post-top">
            <div className="post-heading">
              <Avatar alt="Remy Sharp" src="../asset/discorfd" />
              <Typography variant = "h6" className="post-title" >
                 post.title
              </Typography>
            </div>
            <div className="post-date">
              <p>
                nipun created on June 14 2021
              </p>
            </div>
          </div>
          <p className="post-body">
            post.body.substring(1,200)
          </p>
      <hr />
      </div>
      <div className="post">
          <div className="post-top">
            <div className="post-heading">
              <Avatar alt="Remy Sharp" src="../asset/discorfd" />
              <Typography variant = "h6" className="post-title" >
                 post.title
              </Typography>
            </div>
            <div className="post-date">
              <p>
                nipun created on June 14 2021
              </p>
            </div>
          </div>
          <p className="post-body">
            post.body.substring(1,200)
          </p>
      <hr />
      </div>
      </div>
  );
}