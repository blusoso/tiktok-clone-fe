import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import { useRecoilValue, useSetRecoilState } from "recoil";
import commentState from "../../recoils/modules/comment";
import { motion } from "framer-motion";

const CommentPanelContainer = styled(motion)`
  background-color: white;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 0.7em 1em;
`;

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
  const setCommentValues = useSetRecoilState(commentState);

  return (
    <CommentPanelContainer initial={{ height: 0 }} animate={{ height: 70 }}>
      <CommentNumber>39 comments</CommentNumber>
      <CloseIconWrapper
        onClick={() => setCommentValues((cv) => ({ ...cv, isOpen: false }))}
      >
        <CloseIcon />
      </CloseIconWrapper>
    </CommentPanelContainer>
  );
};

export default CommentPanel;
