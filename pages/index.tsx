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
      <HeadImageWrapper>
        <HeadImageBox ref={container_Carousel}>
          <HeadImage>
            <Image
              alt=""
              src={"/images/item/8a0b876907e14030aad6eb00716a05b6_20220504165423.jpg"}
              layout='fill'
              objectFit='cover'
            />
          </HeadImage>
          <HeadImage>
            <Image
              alt=""
              src={"/images/item/ce34023d647b4fbda5f8721d6b5564f5_20220504201013.jpg"}
              layout='fill'
              objectFit='cover'
            />
          </HeadImage>
          <HeadImage>
            <Image
              alt=""
              src={"/images/item/da6e9f3e96494390826f625b20d4d912_20220504175902.png"}
              layout='fill'
              objectFit='cover'
            />
          </HeadImage>
          <HeadImage>
            <Image
              alt=""
              src={"/images/item/43fc39f1b0d84891a4c8480f74f77467_20220504165958.jpg"}
              layout='fill'
              objectFit='cover'
            />
          </HeadImage>
        </HeadImageBox>
      </HeadImageWrapper>
      <ShortcutCollection>
        <ShortWrapper>
          <ShortBox>
            <ShortContent>
              <Image
                alt=""
                src={"/images/item/short/short1.jpeg"}
                layout='fill'
                objectFit='cover'
                onClick={clickShort}
              />
            </ShortContent>
          </ShortBox>
          <ShortBox>
            <ShortContent>
              <Image
                alt=""
                src={"/images/item/short/short3.png"}
                layout='fill'
                objectFit='cover'
                onClick={clickShort}
              />
            </ShortContent>
          </ShortBox>
          <ShortBox>
            <ShortContent>
              <Image
                alt=""
                src={"/images/item/short/short5.png"}
                layout='fill'
                objectFit='cover'
                onClick={clickShort}
              />
            </ShortContent>
          </ShortBox>
          <ShortBox>
            <ShortContent>
              <Image
                alt=""
                src={"/images/item/short/short2.jpeg"}
                layout='fill'
                objectFit='cover'
                onClick={clickShort}
              />
            </ShortContent>
          </ShortBox>
          <ShortBox>
            <ShortContent>
              <Image
                alt=""
                src={"/images/item/short/short4.png"}
                layout='fill'
                objectFit='cover'
                onClick={clickShort}
              />
            </ShortContent>
          </ShortBox>
        </ShortWrapper>
      </ShortcutCollection>
      <DroppedContainer>
        <DroppedTitleEn>Just Dropped</DroppedTitleEn>
        <DroppedTitleKo>발매 상품</DroppedTitleKo>
        <DroppedItemsBox>
          <DroppedItem>
            <DroppedImage>
              <Image
                alt=""
                src={"/images/item/fendi-bag1.png"}
                layout='fill'
                objectFit='cover'
              />
            </DroppedImage>
          </DroppedItem>
          <DroppedItem>
            <DroppedImage>
              <Image
                alt=""
                src={"/images/item/hermes-bag1.png"}
                layout='fill'
                objectFit='cover'
              />
            </DroppedImage>
          </DroppedItem>
        </DroppedItemsBox>
      </DroppedContainer>
    </Container>
  )
}
const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  /* overflow: hidden; */
  background-color: white;
  padding-bottom: 50px;
`
const HeadImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  overflow: hidden;
  transition: all 0.5s;
`
const HeadImageBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 400%;
  height: 100%;
  display: flex;
  transition: transform 0.5s;
`
const HeadImage = styled.div`
  float: left;
  position: relative;
  width: 25%;
  height: 100%;
`
const ShortcutCollection = styled.div`
  width: calc(100% - 30px);
  height: auto;
  padding: 12px 15px 20px 15px;
`
const ShortWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 20%;
  transition: all 0.5s;
  display: flex;
`
const ShortBox = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 20%;
`
const ShortContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 5px;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`
const DroppedContainer = styled.div`
  width: calc(100% - 30px);
  height: auto;
  padding: 12px 15px;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-top: 1px solid #EDEDED;
`
const DroppedTitleEn = styled.p`
  font-size: 1.4rem;
  font-family: 'NEXON Lv1 Gothic OTF Bold';
`
const DroppedTitleKo = styled.p`
  font-size: 1.4rem;
  font-family: 'NEXON Lv1 Gothic OTF';
  color: #808080;
  margin-top: 4px;
`
const DroppedItemsBox = styled.div`
  width: 100%;
  padding: 12px 0;
  display: flex;
  justify-content: space-between;
  gap: 8px;
`
const DroppedItem = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 100%;
`
const DroppedImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(50% - 3px);
  border-radius: 12px;
  overflow: hidden;
  background-color: #ebf0f5;
`
// width == height (auto)
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 100%;
`
const ContentBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: aqua;
`

// Height auto
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

export default Home;
