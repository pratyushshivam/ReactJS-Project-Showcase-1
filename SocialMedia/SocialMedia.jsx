import React from 'react';
import useCursorStyle from '../../hooks/useCursorStyle';
import { Instagram, Facebook, Vimeo } from '../Icons';
import StickyCursor from '../StickyCursor';
import { Container, Link } from './styles';

const medias = [
  { component: Instagram, url: 'https://github.com/pratyushshivam?tab=repositories' },
  { component: Facebook, url: 'https://www.linkedin.com/in/pratyushshivam' },
  { component: Vimeo, url: 'https://www.instagram.com/pratyushshivam/' },
];

const SocialMedia = props => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <Container {...props}>
      {medias.map(({ component: Component, url }) => (
        <StickyCursor key={url}>
          <Link
            target="_blank"
            href={url}
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            <Component />
          </Link>
        </StickyCursor>
      ))}
    </Container>
  );
};

export default React.memo(SocialMedia);
