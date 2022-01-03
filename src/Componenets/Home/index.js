import React from "react";
import { HomeDiv, HomeInformation, HomeTitle, HomeDesc, HomeBtn, HomeInfo, HomeDescSpan  } from "./style.js";

const Home = () => {
    return (
      <HomeDiv>
      <div className="container">
          <HomeInformation>
              <HomeTitle>Diyar Hussein</HomeTitle>
              <HomeInfo>Creative Director</HomeInfo>
              <HomeDesc>
                  Iam a professional <HomeDescSpan>UX Designer</HomeDescSpan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
              </HomeDesc>
              <HomeBtn>Let's Begin</HomeBtn>
          </HomeInformation>
      </div>
    </HomeDiv>
    );
}

export default Home;