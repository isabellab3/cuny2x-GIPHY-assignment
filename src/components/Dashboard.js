import React, {Component} from 'react';
import GifLoader from './GifLoader.js'
import axios from "axios"

const API_KEY = "tmtF2QRwHh7tnPxTZp5sxWf4FSX5DcBQ"
const DEFAULT_RATING = "g"
const DEFAULT_LANG = "en"
const DEFAULT_LIMIT = 25




class Dashboard extends Component{
  constructor(props){
    super(props)
    this.state = {
      searchInput:"",
      gifs: [],
      rating: DEFAULT_RATING,
      lang: DEFAULT_LANG,
      limit: DEFAULT_LIMIT
    }
  }
  handleInput = function(field) {
      return (e) => {
        this.setState({[field]:e.target.value})
      }    
  }

  handleBlur = (e) => {
    if (e.target.value <= 0) {
      this.setState({limit: DEFAULT_LIMIT})
    }
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { searchInput, rating, lang, limit } = this.state;
    const endpoint = `http://api.giphy.com/v1/gifs/search?q=${searchInput}&lang=${lang}&rating=${rating}&limit=${limit}&api_key=${API_KEY}`
    debugger
    const gifs = await axios.get(endpoint)
    this.setState({gifs:gifs.data.data})
  }
  async componentDidMount(){
    const endpoint = `http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`
    const gifs = await axios.get(endpoint)
    this.setState({gifs:gifs.data.data})
  }
  render(){
    return <div className="searchField">
              <form onSubmit={this.handleSubmit}>
                <p>Search Gifs</p>
                <input type="text" value={this.state.searchInput} onChange={this.handleInput("searchInput")}/>
                <input type="number" value={this.state.limit} onChange={this.handleInput("limit")} onBlur={this.handleBlur}/>
                <select name="rating" class="select-rating" >
                    <option value="g" select>G</option>
                    <option value="pg">PG</option>
                    <option value="pg-13">PG-13</option>
                    <option value="r">R</option>
                </select>
                <select name="lang" class="select-lang" onChange={this.handleInput("lang")}>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="pt">Portugese</option>
                    <option value="id">Indonesian</option>
                    <option value="fr">French</option>
                    <option value="ar">Arabic</option>
                    <option value="tr">Turkish</option>
                    <option value="th">Thai</option>
                    <option value="vi">Vietnamese</option>
                    <option value="de">German</option>
                    <option value="it">Italian</option>
                    <option value="jp">Japanese</option>
                    <option value="zh-CN">Chinese Simplified</option>
                    <option value="zh-TW">Chinese Traditional</option>
                    <option value="ru">Russian</option>
                    <option value="ko">Korean</option>
                    <option value="pl">Polish</option>
                    <option value="nl">Dutch</option>
                    <option value="ro">Romanian</option>
                    <option value="hu">Hungarian</option>
                    <option value="sv">Swedish</option>
                    <option value="cs">Czech</option>
                    <option value="hi">Hindi</option>
                    <option value="bn">Bengali</option>
                    <option value="da">Danish</option>
                    <option value="fa">Farsi</option>
                    <option value="tl">Filipino</option>
                    <option value="fi">Finnish</option>
                    <option value="iw">Hebrew</option>
                    <option value="ms">Malay</option>
                    <option value="no">Norweigan</option>
                    <option value="uk">Ukrainian</option>
                </select>
                <button type="submit">Submit</button>
              </form>
              <GifLoader gifs = {this.state.gifs}/>
           </div>
  }
}

export default Dashboard
