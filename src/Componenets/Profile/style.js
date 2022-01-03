import styled from "styled-components";


export const ProfileSkills = styled.div`
    padding: 50px 0;
    overflow: hidden;
`

export const ProfileDiv = styled.div`
    width: 50%;
    float: left;    
`

export const ProfileTitle = styled.h2`
    font-size: 40px; 
    margin-bottom: 20px
`

export const ProfileTitleSpan = styled.span`
    font-weight: normal;x
`

export const ProfileList = styled.ul`
    list-style: none
`

export const ProfileItem = styled.li`
    smargin-bottom: 8px
`
export const ItemSpan = styled.span`
    display: inline-block;
    width: 100px;
    font-weight: bold
`


export const SpanWeb = styled.span`
    font-weight: normal;
    color: #eb5424
`

export const SkillsDiv = styled.div`
    width: 50%;
    float: left;
`

export const SkillsDesc = styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`

export const Bar = styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`
export const BarTitle = styled.span`
    float: left;
`
export const BarPersc = styled.span`
    float: right;
    margin-right: 100px
`

export const BarParent = styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`

export const ParentSpan = styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${props => props.spn === 1 ? '100%' : props.spn === 2 ? '90%' : '80%'}
`



export const SkillsTitle = styled.h2`
    font-size: 40px; 
    margin-bottom: 20px
`

export const SkillsTitleSpan = styled.span`
    font-weight: normal;
`
