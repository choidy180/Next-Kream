import type { NextPage } from "next";
import Nav from "../components/Nav";
import styled from "styled-components";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowBackOutline, ArrowForwardOutline, ChevronBackOutline, ChevronForwardOutline } from "react-ionicons";

const Home: NextPage = () => {
  const container_Carousel:any = useRef();
  const [nowX, setNowX] = useState(0);
  const clickLeftButton = () => {
    nowX !== 0 && setNowX((prop) => prop + 25);
    console.log(`it's work ${nowX}`);
  };
  const clickRightButton = () => {
    nowX !== -75 && setNowX(nowX - 25);
    console.log(`it's work ${nowX}`);
  };
  const clickShort = () => {
    alert("123");
  }
  useEffect(()=>{
    container_Carousel.current.style.transform = `translateX(${nowX}%)`;
  },[nowX])
  return (
    <Container>
      <Nav/>
      <ChevronBackOutline
        color={'white'}
        width={"60px"}
        height={"60px"}
        onClick={clickLeftButton}
        cssClasses={'ChevronBackOutline'}
      />
      <ChevronForwardOutline
        color={'white'}
        width={"60px"}
        height={"60px"}
        onClick={clickRightButton}
        cssClasses={'ChevronForwardOutline'}
      />
      <MainImageContainer ref={container_Carousel}>
        <AutoHeightImageWrapper>
          <Image
            className="autoImage"
            alt=""
            src={"/images/277694051_143621378154748_4393892377502772698_n.jpg"}
            layout='fill'
            objectFit='contain'
          />
        </AutoHeightImageWrapper>
        <AutoHeightImageWrapper>
          <Image
            className="autoImage"
            alt=""
            src={"/images/277694051_143621378154748_4393892377502772698_n.jpg"}
            layout='fill'
            objectFit='contain'
          />
        </AutoHeightImageWrapper>
        <AutoHeightImageWrapper>
          <Image
            className="autoImage"
            alt=""
            src={"/images/277694051_143621378154748_4393892377502772698_n.jpg"}
            layout='fill'
            objectFit='contain'
          />
        </AutoHeightImageWrapper>
        <AutoHeightImageWrapper>
          <Image
            className="autoImage"
            alt=""
            src={"/images/277694051_143621378154748_4393892377502772698_n.jpg"}
            layout='fill'
            objectFit='contain'
          />
        </AutoHeightImageWrapper>
      </MainImageContainer>
      <ShortcutCollection>
        <ShortcutItem>
          <Image
              alt=""
              src={"/images/item/short/short1.jpeg"}
              layout='fill'
              objectFit='cover'
              onClick={clickShort}
            />
        </ShortcutItem>
        <ShortcutItem>
          <Image
              alt=""
              src={"/images/item/short/short2.jpeg"}
              layout='fill'
              objectFit='cover'
              onClick={clickShort}
            />
        </ShortcutItem>
        <ShortcutItem>
          <Image
              alt=""
              src={"/images/item/short/short3.png"}
              layout='fill'
              objectFit='cover'
              onClick={clickShort}
            />
        </ShortcutItem>
        <ShortcutItem>
          <Image
              alt=""
              src={"/images/item/short/short4.png"}
              layout='fill'
              objectFit='cover'
              onClick={clickShort}
            />
        </ShortcutItem>
        <ShortcutItem>
          <Image
              alt=""
              src={"/images/item/short/short5.png"}
              layout='fill'
              objectFit='cover'
              onClick={clickShort}
            />
        </ShortcutItem>
      </ShortcutCollection>
    </Container>
  )
}
const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: white;
  padding-bottom: 50px;
`
const MainImageContainer = styled.div`
  display: flex;
  width: 400%;
  transition: transform 0.5s;
`
const AutoHeightImageWrapper = styled.div`
  float: left;
  width: 25%;
  overflow: hidden;
  & > span {
    position: unset !important;
    & .autoImage{
      object-fit: contain !important;
      position: relative !important;
      height: auto !important;
    }
  };
`
const ShortcutCollection = styled.div`
  width: calc(100% - 36px);
  height: auto;
  padding: 16px 18px;
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 8px;
`
const ShortcutItem = styled.div`
  position: relative;
  width: 100%;
  height: 105px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`

export default Home;
