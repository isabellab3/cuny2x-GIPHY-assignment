import React, {Component} from 'react';

class Dashboard extends Component{
  constructor(props){
    super(props)
    this.state = {
      searchInput:""
    }
  }
  handleInput = (e) => {
    this.setState({searchInput:e.target.value})
  }
  handleSubmit = () => {
    // Use input to make api call here
  }
  render(){
    return <div className="searchField">
              <form>
                <p>Search Gifs</p>
                <input type="text" value={this.state.searchInput} onChange={this.handleInput}></input>
                <button onSubmit={this.handleSubmit}>Submit</button>
              </form>
           </div>
  }
}

export default Dashboard
