import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


class ForgetPassForm extends React.Component {
  render() {
    return (
      <div className="forgetPass">
        <Paper elevation={3}>
          <div className="loginheader">
          <Paper elevation={1}>
            <Typography variant="h6" gutterBottom>
             Forget Password ?
            </Typography>
            </Paper>
            </div>     
            <form className="textInput" noValidate autoComplete="off">
              <TextField
                style={{ marginTop: "10px", marginBottom: "10px" }}
                id="standard-size-small"
                size="small"
                fullWidth
                label="Enter Email:"
              />
               <Button
                    className="btStyle"
                    size="small"
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </Button>
            </form>
        </Paper>
      </div>
    );
  }
}
export default ForgetPassForm;
