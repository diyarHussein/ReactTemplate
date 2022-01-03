import React, { useState, useEffect } from "react";
import axios from "axios";
import { PortfolioDiv, PortfolioTitle, PortfolioList, PortfolioListItems, BoxDiv, BoxDivImg, BoxDivOverlay, BoxDivOverlaySpan, PortfolioTitleSpan } from"./style.js";

const Portfolio = () => {

    const [images, setImages] = useState([]);

    useEffect(()=>{
      axios.get("js/data.json").then(res => {setImages(res.data.portfolio)})
    },[])

    const imageList = images.map((imageItem) => {
      return(
            <BoxDiv key={imageItem.id}>
                <BoxDivImg src={imageItem.image} alt=""/>
                <BoxDivOverlay>
                    <BoxDivOverlaySpan>
                        Show Image
                    </BoxDivOverlaySpan>
                </BoxDivOverlay>
            </BoxDiv>
      )
    })


    return (
      <PortfolioDiv>
        <PortfolioTitle><PortfolioTitleSpan>My</PortfolioTitleSpan>Portfolio</PortfolioTitle>
        <PortfolioList>
            <PortfolioListItems active>All</PortfolioListItems>
            <PortfolioListItems>HTML</PortfolioListItems>
            <PortfolioListItems>Photoshop</PortfolioListItems>
            <PortfolioListItems>Wordpress</PortfolioListItems>
            <PortfolioListItems>Mobile</PortfolioListItems>
        </PortfolioList>
        
        <div>
            {imageList}
        </div>
      
      </PortfolioDiv>
    );
}

export default Portfolio;