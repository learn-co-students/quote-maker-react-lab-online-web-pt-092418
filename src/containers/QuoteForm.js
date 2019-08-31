import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
    content: 'test content', 
    author: 'test author' 
    //set up a controlled form with internal state
  }

  handleOnChange = event => {
    this.setState({
      content: event.target.value
    });
    // Handle Updating Component State
  }
  handleAuthorChange = event => {
    this.setState({
      author: event.target.value
    });
  }

  handleOnSubmit = event => {
    // Handle Form Submit event default
    event.preventDefault();

    // Create quote object from state
    const quote = {
      content: this.state.content,
      author: this.state.author
    };

    // Pass quote object to action creator
    this.props.addQuote(quote);
    
    // Update component state to return to default state
    this.setState({
      content: '',
      author: ''
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        name="content"
                        className="form-control"
                        value={this.state.content}
                        onChange = {(event) => this.handleOnChange(event)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        name="author"
                        className="form-control"
                        type="text"
                        value={this.state.author}
                        onChange ={(event) => this.handleAuthorChange(event)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps =(state) =>{

}

const mapDispatchToProps = dispatch => {
  addQuote: formData => dispatch ({ type: 'Add_QUOTE', payload:formData})
}
//add arguments to connect as needed
export default connect(mapStateToProps, {addQuote})(QuoteForm);
