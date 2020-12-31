import styled from 'styled-components';
import { motion } from 'framer-motion';
import containerStyles from '../../../styles/shared/container';

export const ContentSection = styled(motion.section)`
  ${containerStyles};

  margin-bottom: 210px;

  ${({ theme }) => theme.breakpoints.tablet`
    margin-bottom: 107px;
  `};
`;

export const TextWrapper = styled.div`
  margin-left: 8.333%;
  width: calc(58.333% - 32px);

  ${({ theme }) => theme.breakpoints.small`
    width: 100%;
    margin-left: 0;
  `};
`;

export const Text = styled.h2`
  margin: 0;
  font-size: 6.625rem;
  line-height: 1;
  font-weight: 400;
  white-space:nowrap;
  max-width: 640px;

  ${({ theme }) => theme.breakpoints.tablet`
    font-size: 1.5rem;
    line-height: 1;

    & br {
      display: none;
    }
  `};
`;

export const Texts = styled.h2`
  margin: 0;
  font-size: 3.925rem;
  line-height: 1;
  font-weight: 100;
  max-width: 640px;

  ${({ theme }) => theme.breakpoints.tablet`
    font-size: 1.5rem;
    line-height: 1;

    & br {
      display: none;
    }
  `};
`;
export const Img = styled.img`
  margin: 0;
  width:50%;
  margin-top:-13pc;
  margin-right:5pc;

  ${({ theme }) => theme.breakpoints.tablet`
   width:0%;
   margin-top:-5pc;
  margin-right:5pc;
  `};
`;

export const Flexdiv = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  width: calc(58.333% - 32px);

  ${({ theme }) => theme.breakpoints.small`
    width: 100%;
    margin-left: 0;
  `};
`;

export const Dive = styled.div`
  margin-right:-20pc;

  ${({ theme }) => theme.breakpoints.small`
    width: 100%;
    margin-left: 0;
  `};
`;