import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import PersonIcon from '@material-ui/icons/Person';

class LoginForm extends React.Component {
  constructor(props){
    super(props)
    this.state={
      password:"",
      username:""
    }
    this.onChangePassword= this.onChangePassword.bind(this);
    this.onChangeUsername= this.onChangeUsername.bind(this);
  }
  onChangePassword(e){
      console.log(e.target.value)
      this.setState=this.state.password;
  }
  onChangeUsername(e){
          console.log(e.target.value)
  }
  render() {
    return (
      <div className="loginform" style={{margin:'auto'}}>
        <Paper elevation={3} style={{padding:'20px'}}>
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
              value={this.state.username}
              fullWidth
              onChange={this.onChangeUsername}
              label="UserName"
            />
            <TextField
              required
              style={{ marginTop: "10px", marginBottom: "10px" }}
              id="standard-size-small"
              size="small"
              password={this.state.password}
              onChange={this.onChangePassword}
              fullWidth
              label="Password"
            />
            <Grid container spacing={8}>
              <Grid item sm={12} xs={12} md={6} lg={6}>
                <Link href='/register' style={{fontSize:'12px', curssor:"pointer"}}>Create Account ?</Link>
              </Grid>
              <Grid item sm={12} xs={12} md={6} lg={6}>
                <Link  href="/forget" style={{fontSize:'12px', curssor:"pointer"}}>Forget Password ?</Link>
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
