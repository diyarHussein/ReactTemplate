import styled from "styled-components";

export const NavbarSection = styled.div`
    padding: 20px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000
`

export const Logo = styled.div`
    width: 50%;
    float: left;
`

export const LogoText = styled.h2`
    font-size: 30px;
    font-weight: bold
`
export const Ul = styled.ul`
    width: 50%;
    float: left;
    list-style: none;
    padding: 0px;
`

export const ListItems = styled.li`
    display: inline-block;
`

export const AnchorLink = styled.a`
    display: block;
    cursor: pointer;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    &:hover{
        color: #eb5424;
    }
`
