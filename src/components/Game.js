import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";

import {useDispatch} from 'react-redux';
import {loadDetail} from '../actions/detailAction';
import {Link} from "react-router-dom";
import {smallImage} from "../util";
import {popup} from "../animations";

import noimg from "../img/noimg.png"

const Game = ({name,released,image,id}) =>{
    const stringPathId = id.toString();
    //load details
    const dispatch = useDispatch();
    const loadDetailHandler = () =>{
        document.body.style.overflow='hidden';
        dispatch(loadDetail(id)); // loadDetail is action here
    };
    return(
        <StyledGame variants = {popup} initial="hidden" animate ="show" layoutId={stringPathId} onClick={loadDetailHandler}>
            <Link to ={`esportify/games/${id}`}>
            <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
            <p>{released}</p>
            <motion.img 
            layoutId={`image ${stringPathId}`} 
            src={smallImage((image?image: noimg),640)} alt={name} />
            </Link>
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
min-height: 30vh;
box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
text-align: center;
border-radius: 1rem;
overflow:hidden;
cursor:pointer;
img{
    width:100%;
    height:40vh;
    object-fit: cover;
}
`;

export default Game;