import React from 'react';
import AnimateOnScreen from '../../AnimateOnScreen';
import {
  ContentSection,
  TextWrapper,
  Text,
  Texts,
  Img,
  Dive,
  Flexdiv,
} from './styles';

const Content = () => {
  return (
    <AnimateOnScreen>
      <ContentSection>
        <TextWrapper>
          <Text>Frontend Developer</Text>
          <div>
          <Texts>KIIT UNIVERSITY, INDIA</Texts>
          </div>
        
        </TextWrapper>
      </ContentSection>
    </AnimateOnScreen>
  );
};

export default Content;
