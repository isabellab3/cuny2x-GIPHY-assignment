import React, {Component} from 'react';
import axios from "axios";

class GifLoader extends Component{
  constructor(props){
    super(props)
    this.state = {
      query:props.query,
      key:"tmtF2QRwHh7tnPxTZp5sxWf4FSX5DcBQ",
      gifs:[]
    }
  }
  searchGiphy = () => {
    const endpoint = 'MzlYWCHJ0QwFL0JRq1G9YLQ5UV0QlVfF'

  }
  getTrending = () => {
    console.log("getTrending")
    
  }
  async componentDidMount(){
    this.getTrending()
  }
  render(){
    return <div>Loading</div>
  }
}

export default GifLoader
