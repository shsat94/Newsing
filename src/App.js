import './App.css';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import React,{ Component } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';

export default class App extends Component {
  pagesize=6;
  apikey= process.env.REACT_APP_NEWS_API;
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
          height={3}
        color='#f11946'
        progress={this.state.progress}
      />
          <Routes>
            <Route exact path='/' element={<News apikey={this.apikey}setProgress={this.setProgress}  key={"general"} pagesize={this.pagesize} country="in" category='general' />}></Route>
            <Route exact path='/general' element={<News apikey={this.apikey}setProgress={this.setProgress}  key={"general2"} pagesize={this.pagesize} country="in" category='general' />}></Route>
            <Route exact path='/business' element={<News apikey={this.apikey}setProgress={this.setProgress}  key={"buisness"} pagesize={this.pagesize} country="in" category='business' />}></Route>
            <Route exact path='/entertainment' element={<News apikey={this.apikey}setProgress={this.setProgress}  key={"entertainment"} pagesize={this.pagesize} country="in" category='entertainment' />}></Route>
            <Route exact path='/health' element={<News apikey={this.apikey}setProgress={this.setProgress}  key={"health"} pagesize={this.pagesize} country="in" category='health' />}></Route>
            <Route exact path='/science' element={<News apikey={this.apikey}setProgress={this.setProgress}  key={"science"} pagesize={this.pagesize} country="in" category='science' />}></Route>
            <Route exact path='/sports' element={<News apikey={this.apikey}setProgress={this.setProgress}  key={"sports"} pagesize={this.pagesize} country="in" category='sports' />}></Route>
            <Route exact path='/technology' element={<News apikey={this.apikey}setProgress={this.setProgress}  key={"technology"} pagesize={this.pagesize} country="in" category='technology' />}></Route>

          </Routes>
        </Router>
      </div>
    )
  }
}

