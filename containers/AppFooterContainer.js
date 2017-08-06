import React from 'react';
import AppFooter from '../components/AppFooter.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  mode: state.mode
});

const mapDispatchToProps = (dispatch) => ({
  setMode(mode){
    dispatch(setMode(mode))
  }
});

const AppFooterContainer ({ mode }) => (
  <AppFooter mode={ mode } />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppFooterContainer);
