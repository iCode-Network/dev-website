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
import * as actions from '../../actions/index';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


class MemberOpenings extends React.Component {

  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'right', flexDirection: 'row'}}>
        <div style={{minWidth: 215, height: '100vh'}}></div>
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', minWidth: 350}}>
          <div style={{height: 100}}></div>
          <Paper style={{display: 'flex', alignItems:'center', justifyContent: 'center', padding: 20, marginBottom: 30}} square>
            <div>This is openings.</div>
            <div>This is openings.</div>
            <div>This is openings.</div>
            <div>This is openings.</div>
            <div>This is openings.</div>
            <div>This is openings.</div>
            <div>This is openings.</div>
            <div>This is openings.</div>
            <div>This is openings.</div>
            <div>This is openings.</div>
          </Paper>
          <Paper style={{display: 'flex', alignItems:'center', justifyContent: 'center', padding: 20, marginBottom: 30}} square>
            <div>This is openings.</div>
            <div>This is openings.</div>
            <div>This is openings.</div>
            <div>This is openings.</div>
            <div>This is openings.</div>
            <div>This is openings.</div>
            <div>This is openings.</div>
            <div>This is openings.</div>
            <div>This is openings.</div>
            <div>This is openings.</div>
          </Paper>
          <Paper style={{display: 'flex', alignItems:'center', justifyContent: 'center', padding: 20, marginBottom: 30}} square>
            <div>This is openings.</div>
            <div>This is openings.</div>
            <div>This is openings.</div>
            <div>This is openings.</div>
            <div>This is openings.</div>
            <div>This is openings.</div>
            <div>This is openings.</div>
            <div>This is openings.</div>
            <div>This is openings.</div>
            <div>This is openings.</div>
          </Paper>
          <Paper style={{display: 'flex', alignItems:'center', justifyContent: 'center', padding: 20, marginBottom: 30}} square>
            <div>This is openings.</div>
            <div>This is openings.</div>
            <div>This is openings.</div>
            <div>This is openings.</div>
            <div>This is openings.</div>
            <div>This is openings.</div>
            <div>This is openings.</div>
            <div>This is openings.</div>
            <div>This is openings.</div>
            <div>This is openings.</div>
          </Paper>
        </div>
        <div style={{width: 25}}></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  };
};

export default connect(mapStateToProps, actions)(MemberOpenings);
