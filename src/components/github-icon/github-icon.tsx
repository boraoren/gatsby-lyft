import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import { motion } from "framer-motion";

const Wrapper = styled.div``;

const GithubLink: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fixed(height: 30, width: 30) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  const imageData = data.icon.childImageSharp.fixed;
  return (
    <Wrapper>
      <motion.a
        href="https://github.com/"
        rel="noopener noreferrer"
        target="_blank"
        // eslint-disable-next-line
        css={`
          cursor: pointer;
        `}
        whileHover={{ opacity: 0.5 }}
      >
        <Img fixed={imageData} alt="GitHub Icon" />
      </motion.a>
    </Wrapper>
  );
};

export default GithubLink;