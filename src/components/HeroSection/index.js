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
          <HeroH1>Neque Porro Quisquam</HeroH1>
          <HeroP>
            Quisque non tortor bibendum, vehicula velit eu, lobortis ligula.
            Nulla commodo dolor at fermentum rutrum. Morbi porta posuere lacus,
            luctus pulvinar urna viverra at. Sed a turpis neque. Nullam nec sem
            mi.
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
