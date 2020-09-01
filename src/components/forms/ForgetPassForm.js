import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

class ForgetPassForm extends React.Component {
  render() {
    return (
      <div className="forgetPass">
        <Paper elevation={3}>
        
            <form className="textInput" noValidate autoComplete="off">
              <div className="forget">Forget Password ?</div>
              <TextField
                style={{ marginTop: "10px", marginBottom: "10px" }}
                id="standard-size-small"
                size="small"
                fullWidth
                label="Enter Email:"
              />
              <Grid container >
                <Grid item sm={12} xs={12} md={4} lg={4}>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </Button>
                </Grid>
                <Grid item sm={12} xs={12} md={8} lg={8}>
                <Link href="/register" style={{fontSize:'12px', curssor:"pointer" }}>Create an account ? /</Link> 
                <Link href="/" style={{fontSize:'12px', curssor:"pointer" }}> Login ?</Link>
                </Grid>
              </Grid>        
            </form>
        </Paper>
      </div>
    );
  }
}
export default ForgetPassForm;
