import styled from 'styled-components';

export const MovieImg = styled.img`
  width: 100%;
  border-radius: 15px;
`;

export const AverageDiv = styled.div`
  position: relative;
  display: block;
  z-index: -1;
`;

export const AverageSpan = styled.span`
  position: absolute;
  display: block;

  top: 0;
  right: 0;
  margin: 0;
  border-radius: 50%;
`;
