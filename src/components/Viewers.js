import styled from "styled-components";

import viewerImage1 from '../images/viewersDisney.png';
import viewerImage2 from '../images/viewersPixar.png';
import viewerImage3 from '../images/viewersMarvel.png';
import viewerImage4 from '../images/viewersStarwars.png';
import viewerImage5 from '../images/viewersNational.png';

import viewersVideo1 from '../videos/disney.mp4';
import viewersVideo2 from '../videos/pixar.mp4';
import viewersVideo3 from '../videos/marvel.mp4';
import viewersVideo4 from '../videos/starWars.mp4';
import viewersVideo5 from '../videos/nationalGeographic.mp4';


const Viewers = (props) => {
  return (
    <Container>
      <Wrap>
        <img src={viewerImage1} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={viewersVideo2} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={viewerImage2} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={viewersVideo1} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={viewerImage3} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={viewersVideo3} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={viewerImage4} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={viewersVideo4} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={viewerImage5} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source
            src={viewersVideo5}
            type="video/mp4"
          />
        </video>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    video {
      opacity: 1;
    }
  }
`;

export default Viewers;