import React, {Component} from 'react';
import axios from "axios"



const API_KEY = "tmtF2QRwHh7tnPxTZp5sxWf4FSX5DcBQ"
class SearchField extends Component{
  constructor(props){
    super(props)
    this.state = {
      searchInput:"",
      gifs: []
    }
  }
  handleInput = (e) => {
    this.setState({searchInput:e.target.value})
  }
  handleSubmit = async (e) => {
    e.preventDefault(); 
    const { searchInput } = this.state;
    const endpoint = `http://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=${API_KEY}`
    const gifs = await axios.get(endpoint)
    this.setState({gifs})
  }
  render(){
    return <div className="searchField">
              <form onSubmit={this.handleSubmit}>
                <p>Search Gifs</p>
                <input type="text" value={this.state.searchInput} onChange={this.handleInput}></input>
                <button type="submit">Submit</button>
              </form>
           </div>
  }
}

export default SearchField
