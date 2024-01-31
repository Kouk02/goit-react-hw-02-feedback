import React from 'react';
import { SectionWrap, FeedbackWrap, FeedbackTitle } from '../styledComponents/Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionWrap>
      <FeedbackWrap>
        <FeedbackTitle>{title}</FeedbackTitle>
        {children}
      </FeedbackWrap>
    </SectionWrap>
  );
};

export default Section;