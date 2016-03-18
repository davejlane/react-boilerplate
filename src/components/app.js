import React, { Component } from 'react';
import styles from './app.css';
import SampleIcon from './icons/sample-icon.js';

export default class App extends Component {
  render() {
    return (
      <div className={styles.base}>
        <h1><SampleIcon classes={'foo'} /> React Redux boilerplate with CSS Modules</h1>
      </div>
    );
  }
}
