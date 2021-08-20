import React, { useState } from "react";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroBtnWrapper,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import Video from "../../video/video.mp4";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <div>
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
        </HeroBg>
        <HeroContent>
          <HeroH1>Charles's Personal Portfolio Website</HeroH1>
          <HeroP>
            Welcome to my website. Feel free to check the projects I have done
            and the technologies I know of.
          </HeroP>
          <HeroBtnWrapper>
            <Button to="signuip" onMouseEnter={onHover} onMouseLeave={onHover}>
              Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
