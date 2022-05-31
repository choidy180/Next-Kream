import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { CaretForward, CaretForwardCircleOutline, Home, HomeOutline, Images, ImagesOutline, Person, PersonOutline, Storefront, StorefrontOutline } from "react-ionicons";
import styled from "styled-components";

const Bottom: NextPage = () => {
  const path = useRouter();
  return (
    <Container>
      <Link href={"/"}>
        <Box>
          {(path.pathname === "/" || path.pathname.includes("/release")) ?
            <Home
              color={'#000000'}
              width={"24px"}
              height={"24px"}
            /> : 
            <HomeOutline
              color={'#000000'}
              width={"24px"}
              height={"24px"}
            />
          }
          <span>HOME</span>
        </Box>
      </Link>
      <Link href={"/style/trending"}>
        <Box>
          {(path.pathname.includes("/style")) ?
            <Images
              color={'#000000'}
              width={"24px"}
              height={"24px"}
            /> : 
            <ImagesOutline
              color={'#000000'}
              width={"24px"}
              height={"24px"}
            /> 
          }
          <span>STYLE</span>
        </Box>
      </Link>
      <Link href={"/shop"}>
        <Box>
          {(path.pathname.includes("/shop")) ?
            <Storefront
              color={'#000000'}
              width={"24px"}
              height={"24px"}
            /> : 
            <StorefrontOutline
              color={'#000000'}
              width={"24px"}
              height={"24px"}
            /> 
          }
          <span>SHOP</span>
        </Box>
      </Link>
      <Link href={"/watch"}>
        <Box>
          {(path.pathname.includes("/watch")) ?
            <CaretForward
              color={'#000000'}
              width={"24px"}
              height={"24px"}
            /> : 
            <CaretForwardCircleOutline
              color={'#000000'}
              width={"24px"}
              height={"24px"}
            /> 
          }
          <span>WATCH</span>
        </Box>
      </Link>
      <Link href={"/mypage/store"}>
        <Box>
          {(path.pathname.includes("/mypage")) ?
            <Person
              color={'#000000'}
              width={"24px"}
              height={"24px"}
            /> : 
            <PersonOutline
              color={'#000000'}
              width={"24px"}
              height={"24px"}
            /> 
          }
          <span>MY</span>
        </Box>
      </Link>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  z-index: 99999;
  bottom: 0;
  width: 100%;
  max-width: 576px;
  border-top: 1px solid #EDEDED;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`
const Box = styled.div`
  width: 20%;
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1px;
  cursor: pointer;
  span{
    font-family: 'NEXON Lv2 Gothic Bold';
    font-weight: 500;
    font-size: 0.8rem;
  }
`
export default Bottom;