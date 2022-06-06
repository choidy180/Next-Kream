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
          {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
            <MainImageContainer key={i}>
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
          ))}
        </Box>
        <Box>
          {[1,2,3,4,5,6,7,8,9].map((_, i) => (
            <MainImageContainer key={i}>
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
          ))}
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
  height: auto;
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
  border-radius: 12px;
  overflow: hidden;
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
