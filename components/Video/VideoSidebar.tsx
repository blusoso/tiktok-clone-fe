import React, { useState } from "react";
import styled from "styled-components";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SmsIcon from "@material-ui/icons/Sms";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ShareIcon from "@material-ui/icons/Share";
import { motion } from "framer-motion";
import { useSetRecoilState } from "recoil";
import commentState from "../../recoils/modules/comment";

const VideoSidebarStyled = styled.div`
  position: absolute;
  bottom: 1em;
  right: 1em;
  color: white;
`;

const InteractGroup = styled.div`
  margin: 0.5rem 0;
  user-select: none;
`;

const InteractButton = styled.div<{ buttonColor?: string }>`
  padding: 0.4rem 0.4em;
  text-align: center;
  font-size: 0.8rem;
  cursor: pointer;

  svg {
    font-size: 2.2rem;
    color: ${({ buttonColor }) => buttonColor || "white"};
  }

  p {
    margin: 0;
    font-size: 600;
  }
`;

const InteractButtonMotion = styled(motion.div)``;

const VideoFooterRecord = styled(motion.img)`
  height: 50px;
  filter: invert(1);
`;

const scaleTap = 0.9;
const likeDuration = 0.35;

const variants = {
  liked: { scale: [1, 0, 1] },
  unLiked: { scale: [1, scaleTap, 1] },
};

export type VideoSidebarProps = {
  likes: number;
  comments: number;
  bookmarks: number;
  shares: number;
};

const VideoSidebar = ({
  likes,
  comments,
  bookmarks,
  shares,
}: VideoSidebarProps) => {
  const setCommentValues = useSetRecoilState(commentState);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmark, setIsBookmark] = useState(false);

  const increaseNumber = (number: number) => {
    return number + 1;
  };

  return (
    <VideoSidebarStyled>
      <InteractGroup>
        <InteractButton
          buttonColor={isLiked ? "rgb(254, 44, 85)" : "white"}
          onClick={() => setIsLiked(!isLiked)}
        >
          <InteractButtonMotion
            animate={isLiked ? "liked" : "unLiked"}
            variants={variants}
            transition={{ ease: "easeInOut", duration: likeDuration }}
          >
            <FavoriteIcon />
          </InteractButtonMotion>
          {/* TODO: Handle 15.6k, 1.5m  */}
          <p>{isLiked ? increaseNumber(likes) : likes}</p>
        </InteractButton>
        <InteractButton>
          <InteractButtonMotion
            whileTap={{ scale: scaleTap }}
            onClick={() => setCommentValues((cv) => ({ ...cv, isOpen: true }))}
          >
            <SmsIcon />
          </InteractButtonMotion>
          <p>{comments}</p>
        </InteractButton>
        <InteractButton
          buttonColor={isBookmark ? "#FFBF00" : "white"}
          onClick={() => setIsBookmark(!isBookmark)}
        >
          <InteractButtonMotion whileTap={{ scale: scaleTap }}>
            <BookmarkIcon />
          </InteractButtonMotion>
          <p>{isBookmark ? increaseNumber(bookmarks) : bookmarks}</p>
        </InteractButton>
        <InteractButton>
          <ShareIcon />
          <p>{shares}</p>
        </InteractButton>
      </InteractGroup>

      <VideoFooterRecord
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
        animate={{ rotate: 360 }}
        transition={{ ease: "linear", duration: 3, repeat: Infinity }}
      />
    </VideoSidebarStyled>
  );
};

export default VideoSidebar;
