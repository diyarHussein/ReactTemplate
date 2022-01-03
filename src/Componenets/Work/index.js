import React, {Component} from "react";
import axios from "axios";
import { WorkDiv, WorkTitle, WorkTitleSpan, WorkPart, WorkPartDesc, WorkPartLine, WorkPartIcon, WorkPartTitle } from "./style.js"

class Work extends Component{

state = {
  works : []
}

componentDidMount(){
  axios.get("js/data.json").then(res => {this.setState({works : res.data.works})});
}



  render(){

    const works = this.state.works;
    const workList = works.map((work) => {
      return(
        <WorkPart first = {work.id} key={work.id}>
                <WorkPartIcon className= {work.icon_name}></WorkPartIcon>
                <WorkPartTitle>{work.title}</WorkPartTitle>
                <WorkPartLine/>
                <WorkPartDesc>
                    {work.body}
                </WorkPartDesc>
            </WorkPart>
      )
    })


    return (
      <WorkDiv>
        <div className="container">
            <WorkTitle><WorkTitleSpan>My</WorkTitleSpan> Work</WorkTitle>
            {workList}
        </div>
      </WorkDiv>
    );
  }
    
}

export default Work;