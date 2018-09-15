import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import * as actions from '../actions/index';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import GitHub from './GitHub.png'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3'
    },
    secondary: {
      main: '#4dabf5'
    },
  },
  status: {
    danger: 'orange',
  },
});

class MemberContainer extends React.Component {

  render() {
    return(
      <MuiThemeProvider theme={theme}>
        <div className='member-container' style={{background: '#F8F8F8'}}>
          <AppBar className='appbar' position='absolute'>
            <nav>
              <div className='nav-wrapper'>
                <div className='right-appbar'>
                  <i className='material-icons nav-items logo'>all_out</i>
                  <div className='header'>iCode Network</div>
                  {/* <i className='material-icons nav-items logo'>code</i> */}
                  {/* <div className='nav-items'>Welcome "member"!</div> */}
                </div>
                <div className='left-appbar'>
                  <IconButton><img className='nav-items' src={GitHub} alt="GitHub Link" style={{height: 25,
    paddingBottom: 2, paddingTop: 7}}/></IconButton>
                  <IconButton color='inherit'><i className='material-icons nav-items' style={{fontSize: 30}}>notifications</i></IconButton>
                  <IconButton color='inherit'><i className='material-icons nav-items' style={{fontSize: 30}}>message</i></IconButton>
                  <IconButton color='inherit'><i className='material-icons nav-items' style={{fontSize: 30}}>person_pin</i></IconButton>
                </div>
              </div>
            </nav>
          </AppBar>
          <div>
            <Drawer anchor='left' variant='permanent' open classes={{paperAnchorDockedLeft: 'paper-anchor-docked-left'}}>
              <div>
                <List>
                  <ListItem button className='text'>Home</ListItem>
                  <ListItem button className='text'>My Projects</ListItem>
                  <ListItem button className='text'>New Projects</ListItem>
                  <ListItem button className='text'>Chatrooms</ListItem>
                  <ListItem button className='text'>Leaderboard</ListItem>
                  <ListItem button className='text'>Openings</ListItem>
                </List>
              </div>
            </Drawer>
            <div style={{display: 'flex', justifyContent: 'right', flexDirection: 'row'}}>
              <div style={{minWidth: 215, height: '100vh'}}></div>
              <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', minWidth: 350}}>
                <div style={{height: 100}}></div>
                <Paper style={{display: 'flex', alignItems:'center', justifyContent: 'center', padding: 20, marginBottom: 30}} square>
                  <div>This is home.</div>
                  <div>This is home.</div>
                  <div>This is home.</div>
                  <div>This is home.</div>
                  <div>This is home.</div>
                  <div>This is home.</div>
                  <div>This is home.</div>
                  <div>This is home.</div>
                  <div>This is home.</div>
                  <div>This is home.</div>
                </Paper>
                <Paper style={{display: 'flex', alignItems:'center', justifyContent: 'center', padding: 20, marginBottom: 30}} square>
                  <div>This is home.</div>
                  <div>This is home.</div>
                  <div>This is home.</div>
                  <div>This is home.</div>
                  <div>This is home.</div>
                  <div>This is home.</div>
                  <div>This is home.</div>
                  <div>This is home.</div>
                  <div>This is home.</div>
                  <div>This is home.</div>
                </Paper>
                <Paper style={{display: 'flex', alignItems:'center', justifyContent: 'center', padding: 20, marginBottom: 30}} square>
                  <div>This is home.</div>
                  <div>This is home.</div>
                  <div>This is home.</div>
                  <div>This is home.</div>
                  <div>This is home.</div>
                  <div>This is home.</div>
                  <div>This is home.</div>
                  <div>This is home.</div>
                  <div>This is home.</div>
                  <div>This is home.</div>
                </Paper>
                <Paper style={{display: 'flex', alignItems:'center', justifyContent: 'center', padding: 20, marginBottom: 30}} square>
                  <div>This is home.</div>
                  <div>This is home.</div>
                  <div>This is home.</div>
                  <div>This is home.</div>
                  <div>This is home.</div>
                  <div>This is home.</div>
                  <div>This is home.</div>
                  <div>This is home.</div>
                  <div>This is home.</div>
                  <div>This is home.</div>
                </Paper>
              </div>
              <div style={{width: 25}}></div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }

}

const mapStateToProps = (state) => {
  return {

  };
};

export default connect(mapStateToProps, actions)(MemberContainer);
