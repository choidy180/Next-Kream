import type { NextPage } from "next";
import styled from"styled-components";
import { ArrowBackOutline, CameraOutline, ChatbubblesOutline, HelpCircleOutline, LogoNodejs, SearchOutline, SettingsOutline } from 'react-ionicons'
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

const Nav: NextPage = () => {
  const path = useRouter();
  const [Navigator, setNavigator] = useState(path.pathname);
  return (
    <>
      {(Navigator === "/" || Navigator.includes("/release")) && 
        <Container>
          <Home>
            <Link href={"/"}>
              {Navigator === "/" ? <TabMenuSelect>투데이</TabMenuSelect> : <TabMenu>투데이</TabMenu>}
            </Link>
            <Link href={"/release"}>
              {Navigator === "/release" ? <TabMenuSelect>발매정보</TabMenuSelect> : <TabMenu>발매정보</TabMenu>}
            </Link>
          </Home>
          <HomeRight>
            <ChatbubblesOutline
              color={'#000000'}
              width={"30px"}
              height={"30px"}
              onClick={() => alert(Navigator)}
            />
          </HomeRight>
        </Container>
      }
      {(Navigator.includes("/style")) &&
        <Container>
          {!Navigator.includes("[id]") ? 
            <Home>
              <HomeLeft>
                <SearchOutline
                  color={'#000000'}
                  width={"30px"}
                  height={"30px"}
                  onClick={() => alert(Navigator)}
                />
              </HomeLeft>
              <Link href={"/style/trending"}>
                {Navigator.includes("trending") ? <TabMenuSelect>인기</TabMenuSelect> : <TabMenu>인기</TabMenu>}
              </Link>
              <Link href={"/style/newest"}>
                {Navigator.includes("newest") ? <TabMenuSelect>최신</TabMenuSelect> : <TabMenu>최신</TabMenu>}
              </Link>
              <Link href={"/style/following"}>
                {Navigator.includes("following") ? <TabMenuSelect>팔로잉</TabMenuSelect> : <TabMenu>팔로잉</TabMenu>}
              </Link>
              <HomeRight>
                <CameraOutline
                  color={'#000000'}
                  width={"30px"}
                  height={"30px"}
                  onClick={() => alert(Navigator)}
                />
              </HomeRight>
            </Home> : 
            <Home>
              <HomeLeft>
                <ArrowBackOutline
                  color={'#000000'}
                  width={"30px"}
                  height={"30px"}
                  onClick={() => alert(Navigator)}
                />
              </HomeLeft>
              {Navigator.includes("trending") && <Title>인기</Title>}
              {Navigator.includes("newest") && <Title>최신</Title>}
              {Navigator.includes("following") && <Title>팔로잉</Title>}
            </Home>
          }
        </Container>
      }
      {(Navigator.includes("/shop")) &&
        <Container>
          <ShopInput
            type="text"
            placeholder="브랜드명, 모델명, 모델번호 등"
          />
        </Container>
      }
      {(Navigator.includes("/watch")) &&
        <Container>
          <Home>
            <Title>Watch</Title>
            <HomeRight>
              <HelpCircleOutline
                color={'#000000'}
                width={"30px"}
                height={"30px"}
                onClick={() => alert(Navigator)}
              />
            </HomeRight>
          </Home>
        </Container>
      }
      {(Navigator.includes("/mypage")) &&
        <Container>
          {!Navigator.includes("[id]") ?
            <Home>
              <HomeLeft>
                <SettingsOutline
                  color={'#000000'}
                  width={"30px"}
                  height={"30px"}
                  onClick={() => alert(Navigator)}
                />
              </HomeLeft>
              <Link href={"/mypage/store"}>
                {Navigator.includes("store") ? <TabMenuSelect>내 쇼핑</TabMenuSelect> : <TabMenu>내 쇼핑</TabMenu>}
              </Link>
              <Link href={"/mypage/profile"}>
                {Navigator.includes("profile") ? <TabMenuSelect>내 프로필</TabMenuSelect> : <TabMenu>내 프로필</TabMenu>}
              </Link>
              <HomeRight>
                <CameraOutline
                  color={'#000000'}
                  width={"30px"}
                  height={"30px"}
                  onClick={() => alert(Navigator)}
                />
              </HomeRight>
            </Home> : 
            ""
          }
        </Container>
      }
    </>
  )
}

const Container = styled.div`
  position: relative;
  z-index: 5;
  width: calc(100% - 30px);
  padding: 15px 15px;
  font-family: 'Tium';
  display: flex;
  justify-content: center;
  align-items: center;
`
const Home = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-family: 'NEXON Lv1 Gothic OTF Bold';
`
const TabMenu = styled.span`
  font-size: 1.6rem;
  padding: 4px 0;
  cursor: pointer;
  border-bottom: 2px solid transparent;
`
const TabMenuSelect = styled.span`
  font-size: 1.6rem;
  padding: 4px 0;
  cursor: pointer;
  border-bottom: 2px solid #141414;
`
const HomeLeft = styled.div`
  position: absolute;
  z-index: 999;
  left: 10px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const HomeRight = styled.div`
  position: absolute;
  z-index: 999;
  right: 10px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const Title = styled.span`
  font-size: 1.6rem;
`
const ShopInput = styled.input`
  width: calc(100% - 24px);
  padding: 12px 12px;
  border: none;
  outline: none;
  background-color: #EDEDED;
  border-radius: 8px;
  font-family: 'NEXON Lv1 Gothic OTF';
  ::placeholder{
    font-family: 'NEXON Lv1 Gothic OTF';
  }
`

export default Nav;