import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TocRoundedIcon from "@material-ui/icons/TocRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import LocationCityIcon from "@material-ui/icons/LocationCity";
// import "./TabPanel.css";
function Codeforces(props) {
  const { handle, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={12}>
          <Typography className="handle" variant="h6">
            Name : {props.user.name}
          </Typography>
          <br />
          <Typography className="handle" variant="h6" >
            E-mail : {props.user.email}
          </Typography>
          <br />
          <Typography className="handle" variant="h6">
            Mobile No.
          </Typography>
          <br />
          <Typography className="handle" variant="h6">
            College
          </Typography>
          <br />
          <Typography className="handle" variant="h6">
            Year Of Passout
          </Typography>
          <br />
          <Typography className="handle" variant="h6">
            Year Of Passout
          </Typography>
          
        </Box>
      )}
    </div>
  );
}

//   TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired,
//   };
export default Codeforces;
