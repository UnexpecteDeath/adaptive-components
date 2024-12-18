import React, { useState } from "react";
import styled from "styled-components";
import Menu from "./Menu";

const CardWrapper = styled.div`
  background-color: #1a1a1a;
  border: 1px solid #181818;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 300px;
  position: relative;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 8px;
  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  font-size: 1.25rem;
  color: #555;
`;

const Card = ({ post, removePost }) => {
  const [menuVisible, setMenuVisible] = useState(false);


  const [favorites, setFavorites ] = useState(false)
  const toggleMenu = () => setMenuVisible((prev) => !prev);


  const remove = () => {
    removePost(post.id)
  }

  const [text, setText] = useState(post.description);

  const edit = ()  => {
    setText(prompt('edit description', text))
  }

  return (
    <CardWrapper>
      <MenuButton onClick={toggleMenu}>⋮</MenuButton>
      <Menu isVisible={menuVisible} remove={ remove } edit= { edit }  setFavorites={setFavorites} favorites={favorites}/>
      <Title style={favorites ? {color: '#f5f537'} : {}}>{post.title}</Title>
      <Description style={favorites ? {color: '#f5f537'} : {}}>{text}</Description>
    </CardWrapper>
  );
};

export default Card;