import React, { useRef, useState } from "react";
import styled from "styled-components";
import VideoFooter, { VideoFooterProps } from "./VideoFooter";
import VideoSidebar, { VideoSidebarProps } from "./VideoSidebar";

const VideoStyled = styled.div`
  position: relative;
  background-color: white;
  width: 100%;
  height: 100%;
  scroll-snap-align: start;
`;

const VideoPlayer = styled.video`
  object-fit: fill;
  width: 100%;
  height: 100%;
`;

export type VideoProps = {
  key: string;
  url: string;
} & VideoFooterProps &
  VideoSidebarProps;

const Video = ({
  key,
  url,
  channel,
  description,
  song,
  likes,
  comments,
  bookmarks,
  shares,
}: VideoProps) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  //TODO: play at first time

  const handleVideoPress = () => {
    // if (videoRef.current) {
    //   if (isPlaying) {
    //     videoRef.current.pause();
    //     setIsPlaying(false);
    //   } else {
    //     videoRef.current.play();
    //     setIsPlaying(true);
    //   }
    // }
  };

  return (
    <VideoStyled key={key}>
      <VideoPlayer ref={videoRef} src={url} onClick={handleVideoPress} loop />

      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar
        likes={likes}
        comments={comments}
        bookmarks={bookmarks}
        shares={shares}
      />
    </VideoStyled>
  );
};

export default Video;
