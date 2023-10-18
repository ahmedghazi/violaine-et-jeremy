import React from 'react';
import SanityImageUI from '../ui/SanityImageUI';
import styled from 'styled-components';

const Hero = styled.div`
  /* height: 60vh; */
  .gatsby-image-wrapper {
    width: 100%;
  }
`;

const HeroUI = ({ input }) => {
  return (
    <section className="module hero-ui">
      <Hero>
        <SanityImageUI asset={input} caption="hero" objectFit="" />
      </Hero>
    </section>
  );
};

export default HeroUI;
