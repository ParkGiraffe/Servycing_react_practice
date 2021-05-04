import React from 'react';
import styled from 'styled-components';
import { BrandLogo } from '../brandLogo';
import { Marginer } from '../marginer';

import FarmingImg from '../../images/farming.png'
import { Button } from '../button';

const SpecialistAdContainer = styled.div`
    width:100%;
    height:500px;
    display:flex;
    background-color: #264653;
    align-items:center;
    justify-content: center;
`;

const ContentContainer = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content: center;
`;

const SloganContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content: flex-start;
    margin-right: 5em;
`;

const Slogan =styled.div`
    margin : 0;
    font-size : 24px;
    color : #fff;
    font-weight : 700;
    line-height : 1.3;
    text-align:start;
`;

const StandoutImage = styled.div`
    width:35em;
    height:29em;

    img {
        width:100%;
        height:100%;
    }
`;

export function SpecialistAd(props) {
    return(
        <SpecialistAdContainer>
            <ContentContainer>
                <SloganContainer>
                    <BrandLogo logoSize={40} textSize={35} />
                    <Marginer direction='vertical' margin='12m'/>
                    <SloganContainer>
                        <Slogan>You're a Specialist, and you</Slogan>
                        <Slogan>have an outstanding</Slogan>
                        <Slogan>Service to offer?</Slogan>
                    </SloganContainer>
                    <Marginer direction='vertical' margin='0.8em'/>
                    <Button size={15}>Join as Specialist</Button>
                </SloganContainer>
                <StandoutImage>
                    <img src={FarmingImg} alt ='join-as-specialist'/>
                </StandoutImage>
            </ContentContainer>
        </SpecialistAdContainer>
    )
}