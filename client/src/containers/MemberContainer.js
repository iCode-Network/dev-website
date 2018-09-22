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
import GitHub from './assets/GitHub.png';
import leftBracket from './assets/leftBracket.png';
import circle from './assets/circle.png';
import rightBracket from './assets/rightBracket.png';
import iCodeNetwork from './assets/iCodeNetwork.png';
import MemberHome from '../components/MemberComponents/MemberHome';
import MemberMyProjects from '../components/MemberComponents/MemberMyProjects';
import MemberNewProjects from '../components/MemberComponents/MemberNewProjects';
import MemberChatrooms from '../components/MemberComponents/MemberChatrooms';
import MemberLeaderboard from '../components/MemberComponents/MemberLeaderboard';
import MemberOpenings from '../components/MemberComponents/MemberOpenings';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#039BE5'
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
    let component;
    if (this.props.home) {
      component = <MemberHome />;
    } else if (this.props.myProjects) {
      component = <MemberMyProjects />
    } else if (this.props.newProjects) {
      component = <MemberNewProjects />
    } else if (this.props.chatrooms) {
      component = <MemberChatrooms />
    } else if (this.props.leaderboard) {
      component = <MemberLeaderboard />
    } else if (this.props.openings) {
      component = <MemberOpenings />
    }

    return(
      <MuiThemeProvider theme={theme}>
        <div className='member-container' style={{background: '#F8F8F8'}}>
          <AppBar className='appbar' position='absolute'>
            <nav>
              <div className='nav-wrapper'>
                <div className='right-appbar'>
                  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: 40, marginRight: 15, marginLeft: 15, padding: 2, paddingTop: 5, paddingBottom: 5, borderRadius: 5, background: 'white'}}>
                    <img src={leftBracket} alt="iCode Logo" style={{height: 40}}/>
                    <img src={circle} alt="iCode Logo" className='logo' style={{height: 40}}/>
                    <img src={rightBracket} alt="iCode Logo" style={{height: 40}}/>
                  </div>
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
                  <ListItem button className='text' onClick={() => this.props.showHome()}>Home</ListItem>
                  <ListItem button className='text' onClick={() => this.props.showMyProjects()}>My Projects</ListItem>
                  <ListItem button className='text' onClick={() => this.props.showNewProjects()}>New Projects</ListItem>
                  <ListItem button className='text' onClick={() => this.props.showChatrooms()}>Chatrooms</ListItem>
                  <ListItem button className='text' onClick={() => this.props.showLeaderboard()}>Leaderboard</ListItem>
                  <ListItem button className='text' onClick={() => this.props.showOpenings()}>Openings</ListItem>
                </List>
              </div>
            </Drawer>
            {component}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    home: state.member.home,
    myProjects: state.member.myProjects,
    newProjects: state.member.newProjects,
    chatrooms: state.member.chatrooms,
    leaderboard: state.member.leaderboard,
    openings: state.member.openings,
  };
};

export default connect(mapStateToProps, actions)(MemberContainer);
