import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import PeopleIcon from "@material-ui/icons/People";


class RegistrationForm extends React.Component {
  render() {
    return (
      <div className="registerForm">
        <Paper elevation={3}>
          <div className="header">
            <div>
              <PeopleIcon />
            </div>
            <Typography variant="h6" gutterBottom>
               Create Account
            </Typography>
          </div>

          <form className="textInput" noValidate autoComplete="off">
            <div>
              <Grid container spacing={8}>
                <Grid item sm={12} xs={12} md={6} lg={6}>
                  <TextField
                    required
                    style={{ marginTop: "10px", marginBottom: "10px" }}
                    id="standard-size-small"
                    size="small"
                    fullWidth
                    label="First-Name"
                  />
                </Grid>
                <Grid item sm={12} xs={12} md={6} lg={6}>
                  <TextField
                    required
                    style={{ marginTop: "10px", marginBottom: "10px" }}
                    id="standard-size-small"
                    size="small"
                    fullWidth
                    label="Last-Name"
                  />
                </Grid>
              </Grid>
            </div>
            <div>
            
              <TextField
                style={{ marginTop: "10px", marginBottom: "10px" }}
                id="standard-size-small"
                size="small"
                fullWidth
                label="Email Address"
              />
            </div>
            <div>
              <TextField
                required
                style={{ marginTop: "10px", marginBottom: "10px" }}
                id="standard-size-small"
                size="small"
                fullWidth
                label="Password"
              />
            </div>
            <div>
              <TextField
                required
                style={{ marginTop: "10px", marginBottom: "10px" }}
                id="standard-size-small"
                size="small"
                fullWidth
                label="Confirm Password"
              />
            </div>
            <div>
              <Grid container spacing={8}>
                <Grid item sm={12} xs={12} md={6} lg={6}>
                  <Button
                    // className="btnStyle"
                    size="small"
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </Button>
                </Grid>
                <Grid item sm={12} xs={12} md={6} lg={6}>
                  <Link href="/" style={{ fontSize: "12px" }}>Want to LogIn ?</Link>
                </Grid>
              </Grid>
            </div>
          </form>
        </Paper>
      </div>
    );
  }
}
export default RegistrationForm;
