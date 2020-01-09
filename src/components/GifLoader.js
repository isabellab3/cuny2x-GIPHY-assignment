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
  getTrending = async () => {
    const { key } = this.state;
    const endpoint = `http://api.giphy.com/v1/gifs/trending?api_key=${key}`
    const response = await axios.get(endpoint)
    this.setState({gifs: response.data.data})
  }
  async componentDidMount(){
    this.getTrending()
  }
  render(){
    return <div>Loading</div>
  }
}

export default GifLoader
