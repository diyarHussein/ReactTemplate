import React, {useState, useEffect} from "react";
import axios from "axios";
import { ProfileSkills,ProfileTitle,ProfileTitleSpan,ItemSpan, ProfileDiv, SpanWeb, ProfileList, ProfileItem, SkillsDiv, SkillsTitle, SkillsDesc, SkillsTitleSpan, Bar, BarTitle, BarParent, BarPersc, ParentSpan } from"./style.js";

const Profile = () => {

    const [skills, setSkills] = useState([]);

    useEffect(() =>{
      axios.get("js/data.json").then(res => {setSkills(res.data.skills)});
    }, [])

    const skillList = skills.map((skill) => {
      return(
            <Bar key = {skill.id}>
              <BarTitle>{skill.title}</BarTitle>
              <BarPersc>{skill.percent}</BarPersc>
              <BarParent>
                  <ParentSpan spn={skill.id}></ParentSpan>
              </BarParent>
            </Bar>
      )
    })

    return (
      <ProfileSkills>
      <div className="container">
          <ProfileDiv>
              <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
              <ProfileList>
                  <ProfileItem>
                      <ItemSpan>Name</ItemSpan>
                      Hamza Nabil
                  </ProfileItem>
                  <ProfileItem>
                      <ItemSpan>Birthday</ItemSpan>
                      21/1/1996
                  </ProfileItem>
                  <ProfileItem>
                      <ItemSpan>Address</ItemSpan>
                      Ain shams
                  </ProfileItem>
                  <ProfileItem>
                      <ItemSpan>Phone</ItemSpan>
                      4444 5555 6666
                  </ProfileItem>
                  <ProfileItem>
                      <ItemSpan>Email</ItemSpan>
                      hamza@hamza.com
                  </ProfileItem>
                  <ProfileItem>
                      <ItemSpan>Website</ItemSpan>
                      <SpanWeb>www.google.com</SpanWeb>
                  </ProfileItem>
              </ProfileList>
          </ProfileDiv>
          
          <SkillsDiv>
              <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
              <SkillsDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
              </SkillsDesc>
              {skillList}
          </SkillsDiv>
          
      </div>
  </ProfileSkills>
    );
}

export default Profile;