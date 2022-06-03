import type { NextPage } from "next";
import Nav from "../components/Nav";
import styled from "styled-components";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowBackOutline, ArrowForwardOutline, ChevronBackOutline, ChevronForwardOutline } from "react-ionicons";
import Link from "next/link";

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
          <Link href={"/shop"}>
            <DroppedItemDiv>
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
              <DroppedTitle>Fendi</DroppedTitle>
              <DroppedName>남성 더플백</DroppedName>
              <DroppedPrice>9,840,000원 <span>즉시 구매가</span></DroppedPrice>
            </DroppedItemDiv>
          </Link>
          <Link href={"/shop"}>
            <DroppedItemDiv>
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
              <DroppedTitle>HERMES</DroppedTitle>
              <DroppedName>엘러브레이싱볼리드45 블랙</DroppedName>
              <DroppedPrice>47,350,090원 <span>즉시 구매가</span></DroppedPrice>
            </DroppedItemDiv>
          </Link>
        </DroppedItemsBox>
      </DroppedContainer>
      <BannerWrapper>
        <BannerContentBox>
          <Image
            alt=""
            src={"/images/item/2022060311143200000007544.jpg"}
            layout='fill'
            objectFit='cover'
          />
        </BannerContentBox>
      </BannerWrapper>
      <FocusContainer>
        <FocusTitleEn>Brand Focus</FocusTitleEn>
        <FocusTitleKo>모두가 좋아하는 브랜드</FocusTitleKo>
        <FocusWrapper>
          <FocusBox>
            <FocusImage>
              <Image
                alt=""
                src={"/images/brand/hermes.png"}
                layout='fill'
                objectFit='contain'
              />
            </FocusImage>
            <FocusTitle>에르메스</FocusTitle>
          </FocusBox>
          <FocusBox>
            <FocusImage>
              <Image
                alt=""
                src={"/images/brand/chanel.png"}
                layout='fill'
                objectFit='contain'
              />
            </FocusImage>
            <FocusTitle>샤넬</FocusTitle>
          </FocusBox>
          <FocusBox>
            <FocusImage>
              <Image
                alt=""
                src={"/images/brand/rolex.png"}
                layout='fill'
                objectFit='contain'
              />
            </FocusImage>
            <FocusTitle>롤렉스</FocusTitle>
          </FocusBox>
          <FocusBox>
            <FocusImage>
              <Image
                alt=""
                src={"/images/brand/louisvuitton.png"}
                layout='fill'
                objectFit='contain'
              />
            </FocusImage>
            <FocusTitle>루이비통</FocusTitle>
          </FocusBox>
          <FocusBox>
            <FocusImage>
              <Image
                alt=""
                src={"/images/brand/cartier.png"}
                layout='fill'
                objectFit='contain'
              />
            </FocusImage>
            <FocusTitle>까르띠에</FocusTitle>
          </FocusBox>
        </FocusWrapper>
        <FocusWrapper>
          <FocusBox>
            <FocusImage>
              <Image
                alt=""
                src={"/images/brand/apple.png"}
                layout='fill'
                objectFit='contain'
              />
            </FocusImage>
            <FocusTitle>애플</FocusTitle>
          </FocusBox>
          <FocusBox>
            <FocusImage>
              <Image
                alt=""
                src={"/images/brand/prada.png"}
                layout='fill'
                objectFit='contain'
              />
            </FocusImage>
            <FocusTitle>프라다</FocusTitle>
          </FocusBox>
          <FocusBox>
            <FocusImage>
              <Image
                alt=""
                src={"/images/brand/celine.png"}
                layout='fill'
                objectFit='contain'
              />
            </FocusImage>
            <FocusTitle>셀린느</FocusTitle>
          </FocusBox>
          <FocusBox>
            <FocusImage>
              <Image
                alt=""
                src={"/images/brand/balenciaga.png"}
                layout='fill'
                objectFit='contain'
              />
            </FocusImage>
            <FocusTitle>발렌시아가</FocusTitle>
          </FocusBox>
          <FocusBox>
            <FocusImage>
              <Image
                alt=""
                src={"/images/brand/thombrowne.png"}
                layout='fill'
                objectFit='contain'
              />
            </FocusImage>
            <FocusTitle>톰브라운</FocusTitle>
          </FocusBox>
        </FocusWrapper>
      </FocusContainer>
      <BannerWrapper>
        <BannerContentBox>
          <Image
            alt=""
            src={"/images/2022053014074000000011886.png"}
            layout='fill'
            objectFit='cover'
          />
        </BannerContentBox>
      </BannerWrapper>
      <DroppedContainer>
        <DroppedTitleEn>Upcoming Release</DroppedTitleEn>
        <DroppedTitleKo>발매 예정</DroppedTitleKo>
        <DroppedItemsBox>
          <Link href={"/shop"}>
            <DroppedItemDiv>
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
              <DroppedTitle>Fendi</DroppedTitle>
              <DroppedName>남성 더플백</DroppedName>
              <DroppedPrice>9,840,000원 <span>즉시 구매가</span></DroppedPrice>
            </DroppedItemDiv>
          </Link>
          <Link href={"/shop"}>
            <DroppedItemDiv>
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
              <DroppedTitle>HERMES</DroppedTitle>
              <DroppedName>엘러브레이싱볼리드45 블랙</DroppedName>
              <DroppedPrice>47,350,090원 <span>즉시 구매가</span></DroppedPrice>
            </DroppedItemDiv>
          </Link>
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
  padding-bottom: 80px;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-top: 1px solid #EDEDED;
`
const DroppedTitleEn = styled.p`
  font-size: 2rem;
  font-family: 'NEXON Lv1 Gothic OTF Bold';
`
const DroppedTitleKo = styled.p`
  font-size: 1.6rem;
  font-family: 'NEXON Lv1 Gothic OTF';
  color: #808080;
  margin-top: 4px;
`
const DroppedItemsBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 8px;
`
const DroppedItemDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
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
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  background-color: #ebf0f5;
`
const DroppedTitle = styled.p`
  padding-left: 15px;
  font-size: 1.7rem;
  font-family: 'NEXON Lv1 Gothic OTF Bold';
`
const DroppedName = styled.p`
  padding-left: 15px;
  font-size: 1.4rem;
  font-family: 'NEXON Lv1 Gothic OTF';
  margin-top: 4px;
`
const DroppedPrice = styled.p`
  padding-left: 15px;
  font-size: 1.4rem;
  font-family: 'NEXON Lv1 Gothic OTF Bold';
  margin-top: 6px;
  span{
    font-family: 'NEXON Lv1 Gothic OTF';
    color: rgb(99, 110, 114);
    font-size: 1.2rem;
  }
`
const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 60%;
  margin-top: 25px;
`
const BannerContentBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(99, 110, 114);
`
const FocusContainer = styled.div`
  width: calc(100% - 30px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 40px 15px 12px 15px;
`
const FocusTitleEn = styled.p`
  font-size: 1.8rem;
  font-family: 'NEXON Lv1 Gothic OTF Bold';
`
const FocusTitleKo = styled.p`
  font-size: 1.6rem;
  font-family: 'NEXON Lv1 Gothic OTF';
  color: #808080;
  margin-top: 4px;
  margin-bottom: 6px;
`
const FocusWrapper = styled.div`
  margin-top: 12px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 12px;
`
const FocusBox = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const FocusBox2 = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
  background-color: #141414;
`
const FocusImage = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 100%;
  border-radius: 50%;
  overflow: hidden;
`
const FocusTitle = styled.p`
  margin-top: 10px;
  font-size: 1.6rem;
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
