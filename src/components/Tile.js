import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InnerTile = styled.div`
  background-color: ${({ theme }) => theme.color.palette.isabelline};
  background-size: cover;
  height: 100px;
  width: 120px;
  border: 2px solid ${({ theme }) => theme.color.palette.vistaBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.palette.vistaBlue};

  strong {
    font-size: ${({ theme }) => theme.font.size.heading.secondary};
    color: ${({ theme }) => theme.color.palette.moonstoneBlue};
  }
`;

const TopLabel = styled.div`
  border: 2px solid ${({ theme }) => theme.color.palette.vistaBlue};
  border-bottom: none;
  color: ${({ theme }) => theme.color.text};
  text-align: center;
  padding: 2px;
  background-color: ${({ theme }) => theme.color.accent.primary};
  font-size: ${({ theme }) => theme.font.size.label.secondary};
`;

const Wrapper = styled.div`
  margin: 10px;
  cursor: pointer;
  display: inline-block;
  transition: ${({ theme }) => theme.transition.quick};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0,0,0,.3);
  }
`;

const Tile = ({
  gameID, title, imageURL, gameURL, ...rest
}) => (
  <Wrapper>
      <TopLabel>{title}</TopLabel>
      <InnerTile imageURL={imageURL} {...rest} />
    </Wrapper>
);

Tile.propTypes = {
  title: PropTypes.number.isRequired,
};

Tile.defaultProps = {
  title: null,
};

export default Tile;
