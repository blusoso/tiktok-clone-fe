import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Video from "../components/Video/Video";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "../axios";

const HideScrollbar = styled.div`
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const App = styled(HideScrollbar)`
  height: 100vh;
  background-color: black;
  display: grid;
  place-items: center;
`;

const VideosContainer = styled(HideScrollbar)`
  position: relative;
  height: 90vh;
  width: 360px;
  border-radius: 20px;
  scroll-snap-type: y mandatory;
`;

const VideoStyled = styled.div`
  position: relative;
  background-color: white;
  width: 100%;
  height: 100%;
  scroll-snap-align: start;
`;

const Home: NextPage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);

      return response;
    }
    fetchPosts();
  }, []);

  return (
    <>
      <Head>
        <title>Tiktok clone</title>
        <meta name="description" content="Tiktok clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <App>
        <VideosContainer>
          {videos.map(
            (
              {
                url,
                channel,
                description,
                song,
                likes,
                comments,
                bookmarks,
                shares,
              },
              index
            ) => (
              <VideoStyled key={`${url}-${index}`}>
                <Video
                  url={url}
                  channel={channel}
                  description={description}
                  song={song}
                  likes={likes}
                  comments={comments}
                  bookmarks={bookmarks}
                  shares={shares}
                />
              </VideoStyled>
            )
          )}
        </VideosContainer>
      </App>
    </>
  );
};

export default Home;
