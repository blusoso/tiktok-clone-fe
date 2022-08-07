import React from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import { useRecoilState } from "recoil";
import commentState from "../../recoils/modules/comment";

const CommentNumber = styled.p`
  margin: 0;
  text-align: center;
  font-weight: bold;
  font-size: 0.8rem;
`;

const CloseIconWrapper = styled.div`
  position: absolute;
  right: 1.5em;
  top: 1em;
  font-size: 0.5rem;
  cursor: pointer;
`;
const CommentPanel = () => {
  const [, setCommentValues] = useRecoilState(commentState);

  return (
    <>
      <CommentNumber>39 comments</CommentNumber>
      <CloseIconWrapper
        onClick={() => setCommentValues((cv) => ({ ...cv, isOpen: false }))}
      >
        <CloseIcon />
      </CloseIconWrapper>
    </>
  );
};

export default CommentPanel;
