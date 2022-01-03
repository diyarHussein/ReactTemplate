import React, {Component} from "react";
import axios from "axios";
import { SocialMediaDiv, Social, SocialP, SocialSpan, SocialIcon, Info2 } from "./style.js"

class SocialMedia extends Component{

  state = {
    socials : []
  }

  componentDidMount(){
    axios.get("js/data.json").then(res => {this.setState({socials : res.data.social})})
  }

  render(){

    const names = this.state.socials;
    const nameList = names.map((name) => {
      return(
        <Social name = {name.id} key={name.id}>
              <SocialIcon className={name.icon}></SocialIcon>
              <SocialP>
                  <SocialSpan>{name.title}</SocialSpan>
                  <Info2>{name.body}</Info2>
              </SocialP>
          </Social>
      )

    })

    return (
      <SocialMediaDiv>
        {nameList}
      </SocialMediaDiv>
  );
  }
    
}

export default SocialMedia;