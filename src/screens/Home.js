import React, { useState, useCallback, Fragment } from 'react';
import styled, { css } from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import Icon from 'components/Icon';
import Input from 'components/Input';
import { useFormInput, useDebounce } from 'hooks';
import { rgba } from 'utils/style';

export default function Home() {
  const [saving, setSaving] = useState();
  const title = useFormInput('');
  const content = useFormInput('');
  const noteContent = useDebounce({
    title: title.value,
    content: content.value,
  }, 500);
  const isEmpty = noteContent.title.length === 0 && noteContent.content.length === 0;

  useCallback(async () => {
    if (isEmpty || saving) return;

    try {
      setSaving(true);

      const response = await fetch('/functions/save', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(noteContent),
      });

      if (response.status !== 200) throw new Error('An error occured while saving your note.');

      setSaving(false);
    } catch (error) {
      setSaving(false);
      alert(error.message);
    }
  }, [noteContent, isEmpty, saving]);

  return (
    <Fragment>
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
              {...title}
              autoComplete="off"
              label="Type your title"
              maxLength={320}
            />
            <ContentInput
              {...content}
              autoComplete="off"
              label="Type or paste your text here."
              maxLength={5000}
              multiline
            />
          </EditorContent>
        </EditorWrapper>
      </EditorScrollFix>
      <ButtonWrapper>
        <Button wide disabled={isEmpty}>Share</Button>
        <Button>
          <Icon icon="plus" />
        </Button>
      </ButtonWrapper>
    </Fragment>
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
  * {
    font-size: 32px;
  }

  label {
    top: 16px;
  }
`;

const ContentInput = styled(Input)`
  opacity: 0.8;

  * {
    font-size: 16px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  padding: 20px;
  width: 100%;
  z-index: 999;
`;

const Button = styled.button`
  outline: 0;
  border: none;
  color: ${props => props.disabled
    ? rgba(props.theme.colorText, 0.2)
    : props.theme.colorWhite};
  border-radius: 30px;
  height: 52px;
  width: 52px;
  transition: all 0.3s;

  ${props => !props.disabled && css`
    background: ${props => props.theme.colorAccent};
    cursor: pointer;
  `}

  ${props => props.wide && css`
    width: 120px;
    border: 1px solid ${props => props.disabled
      ? rgba(props.theme.colorText, 0.2)
      : props.theme.colorAccent};
    font-size: 14px;
    letter-spacing: 2px;
  `}

  &:hover,
  &:active,
  &:focus {
    opacity: 0.8;
  }
`;
