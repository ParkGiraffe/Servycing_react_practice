import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { Marginer } from '../marginer';

const CardContainer = styled.div`
    display:flex;
    flex-direction:column;
    overflow:hidden;
    width:300px;
    min-height:250px;
    background-color:#fff;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.17);
    margin:0.5em;
    margin-bottom:1.3em;
`;

const TopContainer = styled.div`
    width: 100%;

`;

const ServiceThumbnail = styled.div`
    width:100%;
    height:11em;

    img {
        width: 100%;
        height:100%;
    }
`;

const ContentContainer = styled.div`
    width : 100%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    flex:1;
    padding: 15px;
    //background-color:pink;
`;

const BottomContainer = styled.div`
    width:100%;
    height:32px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-top: 1px solid rgba(15, 15, 15, 0.19);
    padding: 0 10px;
`;

const Title = styled.h2`
    font-size:18px;
    margin:0;
    font-weight:500;
    color: #000;
    text-align: start;
`;

const SpecialistName = styled.h4`
    margin : 0;
    color : rgba(151, 151, 151, 1);
    font-weight : 400;
    font-size : 12px;
`;

const PriceContainer = styled.div`
    display:flex;
`;

const PriceText = styled.div`
    margin-left:3px;
    color:#2ba679;
    font-weight: 700;
`;

const RatingContainer = styled.div`
    color : #EBE204;
    display:flex;

`;

const StartingAtText = styled.h6`
    margin:0;
    color: rgba(161, 161, 161, 0.9);
    font-weight: 400;
`;


export function ServiceCard(props) {

    const { thumbnailUrl, specialist, id, title, rate, rating} = props;

    return(
        <CardContainer>
            <TopContainer>
                <ServiceThumbnail>
                    <img src={thumbnailUrl} alt={title}/>
                </ServiceThumbnail>
            </TopContainer>
            <ContentContainer>
                <Title>{title}</Title>
                <Marginer direction = 'vertical' margin ={10}/>
                <SpecialistName>{specialist.fullName}</SpecialistName>
            </ContentContainer>
            <BottomContainer>
                <RatingContainer>
                    <FontAwesomeIcon icon={faStar} size='sm' />
                    {rating}
                </RatingContainer>
                <PriceContainer>
                    <StartingAtText>STARTING AT</StartingAtText>
                    <PriceText>${rate}/hr</PriceText>
                </PriceContainer>
            </BottomContainer>
        </CardContainer>
    )
}