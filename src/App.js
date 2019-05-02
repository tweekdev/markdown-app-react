import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import marked from "marked";

import { sampleText } from "./sampleText";
class App extends Component {
  
  state = {
    text: sampleText,
  }

  handleChange = event => {
    const text = event.target.value

    this.setState({ text })
  }


  componentDidMount() {
    const text = localStorage.getItem('text')

    if (text) {
      this.setState({ text })
    } else {
      this.setState({ sampleText })
    }
  }

  componentDidUpdate() {
    const { text } = this.state

    localStorage.setItem('text', text)
  }
  
  


  renderText = text => {
    const __html = marked( text, { sanitize: true } )

    return { __html }
  }



  render() {
    return (
      <div className="container mt-5">
        <h1 className="text-center mb-5">Markdown-app-theau</h1>
        <div className="row">
          <div className="col-sm-5">
            <textarea className="form-control" onChange={ this.handleChange } name="" id="" cols="30" rows="35" value={ this.state.text }></textarea>
          </div>
          <div className="col-sm-2 d-flex align-items-center justify-content-center">
            <h2>=></h2>
          </div>
          <div className="col-sm-5">
            <div dangerouslySetInnerHTML={ this.renderText( this.state.text ) }></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
