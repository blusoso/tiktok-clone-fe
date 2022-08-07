import React from "react";
import styled from "styled-components";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const VideoFooterStyled = styled.div`
  position: relative;
  color: white;
  bottom: 7.5em;
  margin-left 1.5em;
  display: flex;

  .box {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: red;
  }
`;

// TODO: Handle long text 2 lines
const Text = styled.div`
  flex: 1;
  width: 70%;

  h3 {
    margin: 0px;
  }
  p {
    margin: 0.3em 0 0.9em;
  }
`;

const TickerWrapper = styled.div`
  display: flex;
  align-items: center;

  .marquee-container {
    margin-left: 10px;
    height: fit-content;
    width: 50%;

    // -webkit-mask-image: -webkit-gradient(
    //   linear,
    //   left 90%,
    //   left bottom,
    //   from(rgba(0, 0, 0, 1)),
    //   to(rgba(0, 0, 0, 0))
    // );
    // mask-image: linear-gradient(to right, transparent, rgba(0, 0, 0, 1));
  }
`;

const VideoFooterRecord = styled(motion.img)`
  height: 50px;
  filter: invert(1);
  position: absolute;
  bottom: -0.4em;
  right: 1.2em;
`;

export type VideoFooterProps = {
  channel: string;
  description: string;
  song: string;
};

const VideoFooter = ({ channel, description, song }: VideoFooterProps) => {
  return (
    <VideoFooterStyled>
      <Text>
        <h3>@{channel}</h3>
        <p>{description}</p>
        {/* //TODO: pause when click pause */}
        <TickerWrapper>
          <MusicNoteIcon className="videoFooter__icon" />
          <Marquee speed={50} gradient={false}>
            {song}
          </Marquee>
        </TickerWrapper>
      </Text>

      {/* <VideoFooterRecord
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
        animate={{ rotate: 360 }}
        transition={{ ease: "linear", duration: 3, repeat: Infinity }}
      /> */}
    </VideoFooterStyled>
  );
};

export default VideoFooter;
