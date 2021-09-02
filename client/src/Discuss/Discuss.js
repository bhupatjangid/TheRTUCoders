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
const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#2e1534',
  },
}));

export default function CustomizedTabs(props) {
  const classNamees = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="posts">
      <Grid style = {{display: "flex",justifyContent:"space-between", alignContent:"centre",alignItems:"centre", marginLeft : "8px", marginRight: "8px", border: "1px solid black", backgroundColor : "gray", borderRadius : "4px"}}>
      <Typography variant = "h3" className="post-title" >
                 Latest Experience
        </Typography>
        <Button style = {{borderRadius:10, margin:"10px"}}>
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
          <Typography variant = "h8" className="post-body">
            post.body.substring(1,200)
            <a href = "">Read more</a>
      </Typography>
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
          <Typography variant = "h8" className="post-body">
            post.body.substring(1,200)
            <a href = "">Read more</a>
      </Typography>
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
          <Typography variant = "h8" className="post-body">
            post.body.substring(1,200)
            <a href = "">Read more</a>
      </Typography>
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
          <Typography variant = "h8" className="post-body">
            post.body.substring(1,200)
            <a href = "">Read more</a>
      </Typography>
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
          <Typography variant = "h8" className="post-body">
            post.body.substring(1,200)
            <a href = "">Read more</a>
      </Typography>
      <hr />
      </div>
      </div>
  );
}