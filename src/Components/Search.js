import React , { Component } from 'react';
import Marvel from 'marvel-api';
import Suggestion from './Suggestion';


const PUBLIC_KEY = `35e8dd872e4380b366980f99b9bf09d2`;
const PRIVATE_KEY = `d79ca6635a5807a68e77b503b651bbadd7136983`;
let marvel = Marvel.createClient({
  publicKey : PUBLIC_KEY,
  privateKey : PRIVATE_KEY
});

class Search extends Component {
  
  state = {
    error: false,
    query : '',
    results: []
  }

  getHero = () => {
    let name = this.state.query; 
    marvel.characters.findNameStartsWith(name)
    .then(res => {
      this.setState({
        results: res.data
      });
    })
    .catch(() => {
      this.setState({
        error: true
      })
    })
  }

  handleInputChange = () => {
    this.setState({
      query : this.search.value
    }, () => {
      if(this.state.query && this.state.query.length > 1) {
        this.getHero();
      } else if(!this.state.query) {
      }
    });
  }

  render() {
    return (
      <form>
        <input 
          placeholder="Search for Marvel Super Hero..."
          ref = {input => this.search = input}
          onChange = {this.handleInputChange}
          />
        <Suggestion results={this.state.results} />
      </form>
    );
  }
};

export default Search; 
