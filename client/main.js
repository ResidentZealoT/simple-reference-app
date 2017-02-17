// first place the App looks

import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

// finds the main App component could use {App} if default wasnt specified
import App from '../imports/client/App';

// On startup we have to render the App to the render-target specified within the body of main.html
Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
