import React from "react";
import styled from "styled-components";

const MenuWrapper = styled.div`
  position: absolute;
  top: 36px;
  right: 8px;
  background: #1a1a1a;
  border: 1px solid #181818;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: 10;
`;

const MenuItem = styled.div`
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`;

const Menu = ({ isVisible, remove, edit, setFavorites, favorites }) => {
  return (
    <MenuWrapper isVisible={isVisible}>
      <MenuItem onClick={edit}>Редактировать</MenuItem>
      <MenuItem onClick={remove}>Удалить</MenuItem>
      <MenuItem onClick={()=>setFavorites(!favorites)} style={favorites ? {color: '#f5f537'} : {}}>Добавить в избранное</MenuItem>
    </MenuWrapper>
  );
};

export default Menu;