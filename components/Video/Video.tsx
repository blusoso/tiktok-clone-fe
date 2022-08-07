import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import commentState from "../../recoils/modules/comment";
import CommentPanel from "../Comment/CommentPanel";
import VideoFooter, { VideoFooterProps } from "./VideoFooter";
import VideoSidebar, { VideoSidebarProps } from "./VideoSidebar";

const VideoPlayer = styled.video`
  object-fit: fill;
  width: 100%;
  height: 100%;
`;

const CommentPanelContainer = styled(motion.div)`
  background-color: white;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 0.7em 1em;
`;

const commentPanelVariants = {
  open: { y: 0 },
  closed: { y: "100%" },
};

export type VideoProps = {
  url: string;
} & VideoFooterProps &
  VideoSidebarProps;

const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  comments,
  bookmarks,
  shares,
}: VideoProps) => {
  const { isOpen } = useRecoilValue(commentState);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  //TODO: play at first time

  const handleVideoPress = () => {
    const videoCurrent = videoRef.current;
    if (isPlaying) {
      videoCurrent?.pause();
      setIsPlaying(false);
    } else {
      videoCurrent?.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <VideoPlayer ref={videoRef} src={url} onClick={handleVideoPress} loop />
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar
        likes={likes}
        comments={comments}
        bookmarks={bookmarks}
        shares={shares}
      />

      {/* TODO: close when click out of panel */}
      <CommentPanelContainer
        animate={isOpen ? "open" : "closed"}
        variants={commentPanelVariants}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
      >
        {isOpen && <CommentPanel />}
      </CommentPanelContainer>
    </>
  );
};

export default Video;
