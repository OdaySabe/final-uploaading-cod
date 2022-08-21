import React, { Component } from 'react';

export const Home = function () {
  return <button className='home'>Welcome to our page</button>
}

export const About = function () {
  return <button className='about'>its great here</button>
}

export class SpotCheck2 extends Component {

   constructor(){
    super()
    this.state={
      switch:false,
      resultComponent:<Home />
    }
   }
   switching=()=>{
    if(this.state.switch){
      this.setState({switch :false ,resultComponent: <div><Home /></div>})
    }else {
      this.setState({switch :true,resultComponent: <div><About /></div>})
    }
   
   }

  render() {
    return (
      
          <div onClick={this.switching}>{this.state.resultComponent}</div>
    );
  }
}


