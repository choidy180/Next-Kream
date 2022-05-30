import type { NextPage } from "next";
import Nav from "../components/Nav";
import styled from "styled-components";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Nav/>
      <AutoHeightImageWrapper>
        <Image
          className="autoImage"
          alt=""
          src={"/images/277694051_143621378154748_4393892377502772698_n.jpg"}
          layout='fill'
          objectFit='contain'
        />
      </AutoHeightImageWrapper>
    </>
  )
}

const AutoHeightImageWrapper = styled.div`
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

export default Home;
