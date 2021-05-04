import React from 'react';
import styled from 'styled-components';
import { BrandLogo } from '../brandLogo';
import { Button } from '../button';
import { Marginer } from '../marginer';

import {Link} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { deviceSize } from '../responsive';

const NavbarContainer = styled.div`
    width : 100%;
    height : 65px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    //background-color:pink
    padding : 0 1.5em;

    background-color: ${({useTransparent}) => useTransparent? 'transparent' :'#264653' };

`;

const AccessibliltyContainer = styled.div`
    height:100%;
    display:flex;
    align-items:center;
    
`;

const  AnchorLink = styled(Link)`
    font-size:12px;
    color:#fff;
    cursor:pointer;
    text-decoration:none;
    outline:none;
    transition: all 200ms ease-in-out;

    &:hover{
        filter:contrast(0,6);
    }
`;

const Seperator = styled.div`
    min-height:35%;
    width : 1px;
    background-color:#fff;
`;  

export function Navbar(props) {

    const {useTransparent} = props;

    const isMobile = useMediaQuery({maxWidth : deviceSize.mobile});

    return(
        <NavbarContainer useTransparent={useTransparent}>
            <BrandLogo/>
            <AccessibliltyContainer>
                {!isMobile && <AnchorLink> Speciallists Portal </AnchorLink>}
                {!isMobile && <Marginer diection = 'horizontal' margin={10}/>}
                {!isMobile && <Seperator/>}
                <Marginer diection = 'horizontal' margin={10}/>
                <Link to = "/customer/access/signup">
                    <Button size = {11}>Register</Button>
                </Link>
                <Marginer diection = 'horizontal' margin={7}/>
                <AnchorLink to = '/customer/access/signin'> Login </AnchorLink>
            </AccessibliltyContainer>
        </NavbarContainer>
    )
}


