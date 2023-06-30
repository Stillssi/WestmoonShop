import styled from 'styled-components';
import Logo from "../assets/logo.png"
import React, { useState } from 'react';


const Header = styled.div`
width: 100%;
background-color: black;
display: flex;
align-items: center;
justify-content: space-between;
font-family: var(--font-googleLeagueSpartan);
`
const LogoWrapper = styled.div`
padding: 10px 0 10px 30px;
`

const MenuWrapper = styled.div`
display: flex;
margin-right: 80px;
justify-content: center;
align-items: center;
div{
    color: white;
    margin-right: 35px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
}
`

const MenuUl = styled.ul`
background-color: black;
position: absolute;
width: 100px;
text-align: center;
list-style: none;
padding: 10px;
border-radius: 0.5rem;
top: 35px;
li{
  margin-bottom: 7px;
  line-height: 20px;
}
`
const MenuList = styled.div`
position: relative
`
const DetailBrand = ({setIsHovering}) =>{
    return(
        <MenuUl onMouseOut={() => setIsHovering([false, false])} onMouseOver={() => setIsHovering([true, false])}>
            <li>UPTECH</li>
            <li>OZ WIND</li>
            <li>MotionCare Pilates</li>
        </MenuUl>
    )
}

const Products = ({setIsHovering}) =>{
    return(
        <MenuUl onMouseOut={() => setIsHovering([false, false])} onMouseOver={() => setIsHovering([true, false])}>
            <li>MULTI GYM</li>
            <li>EVERROLL</li>
        </MenuUl>
    )
}

const MenuBar = () =>{
  const [isHovering, setIsHovering] = useState([false, false]);
    return(
        <Header>
            <LogoWrapper>
                <img src={Logo} alt="logo img" />
            </LogoWrapper>
            <MenuWrapper>
                <MenuList onMouseOut={() => setIsHovering([false, false])} onMouseOver={() => setIsHovering([true, false])}>BRANDS
                {isHovering[0] ? (<DetailBrand setIsHovering={setIsHovering}/>) : ""}
                </MenuList>
                
                <MenuList onMouseOut={() => setIsHovering([false, false])} onMouseOver={() => setIsHovering([false, true])}>PRODUCTS
                {isHovering[1] ? (<Products setIsHovering={setIsHovering} />) : ""}</MenuList>
                
                <div>CONTACT</div>
            </MenuWrapper>
        </Header>
    )
}

export default MenuBar;


