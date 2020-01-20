import React from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import Input from 'components/Input';

export default function Home() {
  return (
    <React.Fragment>
      <Helmet
        title="Notes App"
        meta={[{
          name: 'description',
          content: "Rapidly capture ideas, checklists, and more with the Notes App by Cody B.",
        }]}
      />
      <EditorScrollFix>
        <EditorWrapper>
          <EditorContent>
            <TitleInput
              autoComplete="off"
              label="Type your title"
              maxLength={320}
            />
            <ParagraphInput
              autoComplete="off"
              label="Type or paste your text here."
              maxLength={5000}
              multiline
            />
          </EditorContent>
        </EditorWrapper>
      </EditorScrollFix>
    </React.Fragment>
  );
}

const EditorScrollFix = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const EditorWrapper = styled.section`
  margin-top: 105px;
  display: flex;
  flex-direction: column;
  margin: auto auto 0;
  padding: 4rem 0 0;
  width: 100%;
  height: auto;
  align-items: center;
`;

const EditorContent = styled.div`
  padding: 0 3.5rem 40vh 5.2rem;
  min-width: 250px;
  max-width: 46rem;
  width: 100%;
  margin: 0;
`;

const TitleInput = styled(Input)`
  padding-top: 16px;
  font-size: 32px;
`;

const ParagraphInput = styled(Input)`
  font-size: 16px;
  opacity: 0.8;
`;
