import type { NextPage } from "next";
import Nav from "../../../components/Nav";
import styled from "styled-components";
import Image from "next/image";

const Trending: NextPage = () => {
  return (
    <>
      <Nav/>
      <Container>
        <Box>
          <MainImageContainer>
            <AutoHeightImageWrapper>
              <Image
                alt=""
                src={"/images/2022053014074000000011886.png"}
                layout='fill'
                objectFit='cover'
                className="autoImage"
              />
            </AutoHeightImageWrapper>
          </MainImageContainer>
          <MainImageContainer>
          <AutoHeightImageWrapper>
            <Image
              alt=""
              src={"/images/item/short/short3.png"}
              layout='fill'
              objectFit='cover'
              className="autoImage"
            />
          </AutoHeightImageWrapper>
        </MainImageContainer>
        </Box>
        <Box>
          <MainImageContainer>
            <AutoHeightImageWrapper>
              <Image
                alt=""
                src={"/images/item/short/short3.png"}
                layout='fill'
                objectFit='cover'
                className="autoImage"
              />
            </AutoHeightImageWrapper>
          </MainImageContainer>
          <MainImageContainer>
            <AutoHeightImageWrapper>
              <Image
                alt=""
                src={"/images/2022053014074000000011886.png"}
                layout='fill'
                objectFit='cover'
                className="autoImage"
              />
            </AutoHeightImageWrapper>
          </MainImageContainer>
        </Box>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: calc(100% - 30px);
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
`
const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`
// Height auto
const MainImageContainer = styled.div`
  display: flex;
  width: 100%;
  transition: transform 0.5s;
`
const AutoHeightImageWrapper = styled.div`
  float: left;
  width: 100%;
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
export default Trending;
