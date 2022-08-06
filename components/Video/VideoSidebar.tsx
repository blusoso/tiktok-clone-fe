import React, { useState } from "react";
import styled from "styled-components";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SmsIcon from "@material-ui/icons/Sms";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ShareIcon from "@material-ui/icons/Share";

const VideoSidebarStyled = styled.div`
  position: absolute;
  top: 43%;
  right: 1em;
  color: white;
`;

const InteractButton = styled.div<{ buttonColor?: string }>`
  padding: 0.8em 0.4em;
  text-align: center;

  svg {
    font-size: 2.5rem;
    color: ${({ buttonColor }) => buttonColor || "white"};
  }

  p {
    margin: 0;
    font-size: 600;
  }
`;

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
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmark, setIsBookmark] = useState(false);

  return (
    <VideoSidebarStyled>
      {/* TODO: button effect */}
      <InteractButton
        buttonColor={isLiked ? "rgb(254, 44, 85)" : "white"}
        onClick={() => setIsLiked(!isLiked)}
      >
        <FavoriteIcon />
        {/* TODO: Handle 15.6k, 1.5m  */}
        <p>{isLiked ? likes + 1 : likes}</p>
      </InteractButton>
      <InteractButton>
        <SmsIcon />
        <p>{comments}</p>
      </InteractButton>
      <InteractButton
        buttonColor={isBookmark ? "#FFBF00" : "white"}
        onClick={() => setIsBookmark(!isBookmark)}
      >
        <BookmarkIcon />
        <p>{isBookmark ? bookmarks + 1 : bookmarks}</p>
      </InteractButton>
      <InteractButton>
        <ShareIcon />
        <p>{shares}</p>
      </InteractButton>
    </VideoSidebarStyled>
  );
};

export default VideoSidebar;
