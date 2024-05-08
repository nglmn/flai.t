import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline, IoMdLock } from "react-icons/io";
import flag from "../../../public/img/MainPanel/Canada.png";
import cover from "../../../public/img/MainPanel/cover.png";
import spotifyImg from "../../../public/img/MainPanel/spotify-1.png";
import appleImg from "../../../public/img/MainPanel/apple_music.png";
import tiktokImg from "../../../public/img/MainPanel/tik_tok.png";
import { getArtistData } from "../../api";

import KeywordsComponent from "../KeywordsComponent/KeywordsComponent";
import { useQuery } from '@tanstack/react-query'

const Section = styled.section`
    width: 100%;
    background: #131314;
    display: flex;
`
const LeftSide = styled.div`
    width: 800px;
    height: fit-content;
    padding: 27px 40px 12px 40px;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
const ArtistData = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`
const Cover = styled.div`
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 50%;

    & img{
        border-radius: 50%;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`
const PlayBtn = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    width: 36px;
    height: 36px;
    backdrop-filter: blur(20px);
    background: rgba(58, 58, 58, 0.5);
    border-radius: 50%;
`
const PlayIcon = styled(FaPlay)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: #FFFFFF;
`
const InfoArtist = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`
const NameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`
const InfoTitle = styled.div`
    color: rgb(142, 143, 146);
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
    display: flex;
    align-items: center;
`
const InfoIcon = styled(IoIosInformationCircleOutline)`
    fill: rgb(142, 143, 146);
    margin-left: 8px;
    width: 18px;
    height: 18px;
`
const ArtistName = styled.p`
    color: rgb(255, 255, 255);
    font-size: 18px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: left;
`
const TypeSoundWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`
const SoundCharacter = styled.p`
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: left;
`
const TypeCharacter = styled.p`
    margin-left: 5px;
    width: fit-content;
    height: fit-content;
    padding: 3px 15px;
    border-radius: 20px;
    background: rgba(39, 69, 145, 0.25);

    color: rgb(105, 147, 255);
    font-size: 10px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 4%;
    text-align: left;
    text-transform: uppercase;
`
const PlatformList = styled.ul`
    display: flex;
    gap: 5px;
`
const PlatformListItem = styled.li`
    width: 20px;
    height: 20px;
`
export const LightText = styled.p`
    color: rgb(255, 255, 255);
    font-size: 12px;
    font-weight: 600;
    line-height: 15px;
    letter-spacing: 0%;
    text-align: left;
    
`
export const DarkText = styled.p`
    color: rgb(142, 143, 146);
    font-size: 12px;
    font-weight: 600;
    line-height: 15px;
    letter-spacing: 0%;
    text-align: left;
`
const DataInfo = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
`
const BitRate = styled.div`
    /* padding: 0px 5px 0 5px; */
    color: rgb(255, 255, 255);
    position: relative;

    & span{
        display: block;
        width: 66px;
        height: 24px;
        backdrop-filter: blur(4px);
        background: rgba(217, 217, 217, 0.1);
    }
    & p{
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(5%, 5%);
        z-index: 0;

        color: rgb(255, 255, 255);
        font-size: 12px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 0%;
        text-align: center;
    }
`
const IconLock = styled(IoMdLock)`
    width: 11px;
    height: 13px;
    fill: #D1FD0A;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
`
const SongData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
`
const CountryData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`
const CountryWrapper = styled.div`
    display: flex;
    gap: 5px;
    & img{
        width: 21px;
        height: 15px;
    }
`
const SongCountryWrapper = styled.div`
    display: flex;
    gap: 74px;
`
const SoundToText = styled.div`
    display: flex;
    gap: 6px;
    align-items: center;
    padding: 5px 15px;
    border-radius: 30px;
    background: rgb(63, 63, 65);
    height: fit-content;
    width: fit-content;

    & p{
        color: rgb(255, 255, 255);
        font-size: 12px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0%;
        text-align: center;
    }
    & span{
        font-size: 15px;
        font-weight: 700;
    }
`
const PlatformData = styled.div`
    display: flex;
    margin-top: 6px;
    margin-left: 100px;
    justify-content: space-between;
`
export const Divider = styled.div`
    left: 0;
    width: 100%;
    margin-top: 30px;
    border: 1px solid rgba(255, 255, 255, 0.03);
`
const RightPart = styled.div`
    width: 150px;
`
const VideoCube = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(100px);
    background: rgb(33, 33, 34);
    padding: 31px 23px 27px 23px;
    & span{
        color: rgb(255, 255, 255);
        font-size: 40px;
        font-weight: 700;
        line-height: 49px;
        letter-spacing: 0%;
        text-align: center;
    }
    & button{
        background-color: transparent;
        color: rgb(209, 253, 10);
        font-size: 12px;
        font-weight: 700;
        line-height: 15px;
        letter-spacing: 0%;
        padding: 0;
        border: none;
    }
`
const VideoPlay = styled(FaPlay)`
    width: 8px;
    height: 10px;
    margin-right: 5px;
`
const GrowthCube = styled.div`
    padding: 26px 27px 25px 27px;
    background: rgb(0, 190, 110);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & p{
        color: rgb(170, 255, 219);
        font-size: 13px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 0%;
        text-align: center;
    }
    & span{
        color: rgb(255, 255, 255);
        font-size: 32px;
        font-weight: 700;
        line-height: 39px;
        text-align: center;
    }
`


const InfoSection = () => {
    const { data, isLoading, isError } = useQuery({ queryKey: ['artistData'], queryFn: () => getArtistData().then(data => data) })
    if (isLoading) {
        return <p>loading...</p>
    }
    if (isError) {
        return <p>Error</p>
    }
    if (!data) {
        return <p>no data</p>
    }

    const { name, sound, type, link: { spotify, apple, tiktok }, duration, bitrate, country, place_country, place_world, keywords } = data;

    return (
        <Section id="info">
            <LeftSide>
                <Wrapper>
                    <ArtistData>
                        <Cover>
                            <PlayBtn type="button">
                                <PlayIcon />
                            </PlayBtn>
                            <img src={cover} alt="cover" />
                        </Cover>
                        <InfoArtist>
                            <NameWrapper>
                                <InfoTitle>Official Artist
                                    <InfoIcon />
                                </InfoTitle>
                                <ArtistName>{name}</ArtistName>
                            </NameWrapper>
                            <TypeSoundWrapper>
                                <SoundCharacter>{sound}</SoundCharacter>
                                <InfoTitle>
                                    Type:
                                    <TypeCharacter>{type}</TypeCharacter>
                                </InfoTitle>
                            </TypeSoundWrapper>
                        </InfoArtist>
                    </ArtistData>

                    <SongCountryWrapper>
                        <SongData>
                            <LightText>🔥🔥🔥 Trending</LightText>
                            <DataInfo>
                                <DarkText>Duration:</DarkText>
                                <LightText>{duration}</LightText>
                            </DataInfo>
                            <DataInfo>
                                <DarkText>Bitrate:</DarkText>
                                <BitRate>
                                    <IconLock />
                                    <p>{bitrate} kbps</p>
                                    <span></span>
                                </BitRate>
                            </DataInfo>
                        </SongData>
                        <CountryData>
                            <DataInfo>
                                <DarkText>Country:</DarkText>
                                <LightText>
                                    <CountryWrapper>
                                        {country} <img src={flag} alt="flag" />
                                    </CountryWrapper>
                                </LightText>
                            </DataInfo>
                            <DataInfo>
                                <DarkText>Place in the country:</DarkText>
                                <LightText>{place_country}</LightText>
                            </DataInfo>
                            <DataInfo>
                                <DarkText>Place in the world:</DarkText>
                                <LightText>{place_world}</LightText>
                            </DataInfo>
                        </CountryData>
                    </SongCountryWrapper>
                </Wrapper>

                <PlatformData>
                    <PlatformList>
                        <PlatformListItem>
                            <a href={spotify}>
                                <img src={spotifyImg} alt="spotify" />
                            </a>
                        </PlatformListItem>
                        <PlatformListItem>
                            <a href={apple}>
                                <img src={appleImg} alt="apple" />
                            </a>
                        </PlatformListItem>
                        <PlatformListItem>
                            <a href={tiktok}>
                                <img src={tiktokImg} alt="tiktok" />
                            </a>
                        </PlatformListItem>
                    </PlatformList>

                    <SoundToText>
                        <span>A</span>
                        <p>Sound to text</p>
                    </SoundToText>
                </PlatformData>

                <Divider />
                <KeywordsComponent keywords={keywords} />
            </LeftSide>

            <RightPart>
                <VideoCube>
                    <DarkText>🙋‍♂️ Videos</DarkText>
                    <span>1.8M</span>
                    <button><VideoPlay />Watch Videos</button>
                </VideoCube>
                <GrowthCube>
                    <p>Daily Growth</p>
                    <span>+100k</span>
                </GrowthCube>
            </RightPart>
        </Section>
    )
}

export default InfoSection