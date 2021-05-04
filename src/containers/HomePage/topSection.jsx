import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { BrandLogo } from '../../components/brandLogo';
import { Button } from '../../components/button';
import { Marginer } from '../../components/marginer';
import { deviceSize } from '../../components/responsive';

import TopSectionBackgroundImg from '../../images/landing-page.jpg'
import TheBestSpecialList from '../../images/Work only with the best.png'

const TopSectionContainer = styled.div`
    width : 100%;
    height: 600px;
    background: url(${TopSectionBackgroundImg});
    background-position:0px -150px;
    background-size : cover;
    //background-color:pink;
`;

const BackgroundFilter = styled.div`
    width :100%;
    height: 100%;
    background-color:rgba(38,70,83,0.9);
    display:flex;
    flex-direction:column;
`;

const TopSectionInnerContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:space-evenly;

    @media screen and (max-width : ${deviceSize.mobile}px) {
        justify-content:center;
        //background-color:pink;
    }
`;

const StandoutImg = styled.div`
    width: 44em;
    height: 33em;

    img {
        width:100%;
        height:100%;
    }
`;

const LogoContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;


    @media screen and (max-width : ${deviceSize.mobile}px) {
        font-size:22px
    }
`;

const SloganText = styled.h2`
    margin:0;
    line-height:1.4;
    color:#fff;
    font-weight:500;
    font-size: 35px;


    @media screen and (max-width : ${deviceSize.mobile}px) {
        justify-content:center;
    }
`;

export function TopSection(props) {

    const {children} = props;

    const isMobile = useMediaQuery({maxWidth: deviceSize.mobile});


    return(
        <TopSectionContainer>
            <BackgroundFilter>
                {children}
                <TopSectionInnerContainer>
                    <LogoContainer>
                        <BrandLogo 
                            logoSize={isMobile ? 50 : 65} 
                            textSize={isMobile ? 45 : 55}
                        />
                        <Marginer direction = 'vertical' margin={8} />
                        <SloganText>Find the right specialist</SloganText>
                        <SloganText>For the right job</SloganText>
                        <Marginer direction = 'vertical' margin={15} />
                        <Button>Join Now</Button>

                    </LogoContainer>
                    {!isMobile && (
                        <StandoutImg>
                            <img src={TheBestSpecialList} alt='best in the field'/>
                        </StandoutImg>
                    )}
                </TopSectionInnerContainer>
            </BackgroundFilter>
        </TopSectionContainer>
    ) 
} 