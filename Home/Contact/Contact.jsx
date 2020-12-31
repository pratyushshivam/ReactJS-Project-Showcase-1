import React from 'react';
import useCursorStyle from '../../../hooks/useCursorStyle';
import AnimateOnScreen from '../../AnimateOnScreen';
import SocialMedia from '../../SocialMedia';
import { ContactSection } from './styles';

const Contact = () => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <AnimateOnScreen>
      <ContactSection>
        <div className="column">
          <a
            className="contact-text"
            href="tel:+917766077785"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            +917766077785
          </a>
          <br />
          <a
            className="contact-text"
            href="mailto:1806225@kiit.ac.in"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            1806225@kiit.ac.in
          </a>
        </div>
        <address className="column contact-text">
          KIIT UNIVERSITY<br /> Patia, Bhubaneswar, India
        </address>
        <SocialMedia className="column" />
      </ContactSection>
    </AnimateOnScreen>
  );
};

export default React.memo(Contact);
