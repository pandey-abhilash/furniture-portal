import React from "react";
//import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import PersonIcon from '@material-ui/icons/Person';

class LoginForm extends React.Component {
  render() {
    return (
      <div className="loginform">
        <Paper elevation={3}>
          <div className="loginheader">
              <div>
                <PersonIcon/>
              </div>
              <div>
            <Typography variant="h6" gutterBottom>
              Login 
            </Typography>
            </div>
          </div>
          <form className="textInput" noValidate autoComplete="off">
            <TextField
              required
              id="standard-size-small"
              style={{ marginTop: "10px", marginBottom: "10px" }}
              size="small"
              fullWidth
              label="UserName"
            />
            <TextField
              required
              style={{ marginTop: "10px", marginBottom: "10px" }}
              id="standard-size-small"
              size="small"
              fullWidth
              label="Password"
            />
            <Grid container spacing={8}>
              <Grid item sm={12} xs={12} md={6} lg={6}>
                <Link  style={{fontSize:'12px'}}>Create Account ?</Link>
              </Grid>
              <Grid item sm={12} xs={12} md={6} lg={6}>
                <Link style={{fontSize:'12px'}}>Forget Password ?</Link>
              </Grid>
            </Grid>

            <Button
              className="btnStyle"
              size="small"
              fullWidth
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}
export default LoginForm;
