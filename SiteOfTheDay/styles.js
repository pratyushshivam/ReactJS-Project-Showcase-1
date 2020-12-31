import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  transform: translateY(-50%);
  top: 50%;
  right: 0;
  width: 53.08px;
  height: 171.358px;
  z-index: ${({ theme }) => theme.zIndex.awwwards};
`;

export const Flip = styled.h1`
  position: fixed;
  transform: rotate(270deg);
  top: 50%;
  font-size:52px;
  right: 0;
  width: 23.08px;
  height: 171.358px;
  z-index: ${({ theme }) => theme.zIndex.awwwards};

  ${({ theme }) => theme.breakpoints.small`
  font-size:22px;
  right:80%;


   
  `};

  ${({ theme }) => theme.breakpoints.tablet`
  font-size:22px;
  right:-100%;


  `};
`;
