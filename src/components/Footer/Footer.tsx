import React from 'react';
import { Link } from 'react-router-dom';
import { useFela } from 'react-fela';
import { footerRule, linkColorRule } from './Footer.style';

const Footer: React.FC = () => {
  const { css } = useFela();

  return (
    <footer className={`page-footer grey darken-1 ${css(footerRule)}`}>
      <div className="container">
        © 2014 Copyright Text
        <div className="grey-text text-lighten-4 right">
          <Link to="/" className={css(linkColorRule)}>
            More Information
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
