import Icons from "../../../assets/img/icon/sprite.svg";
import Skeleton from "react-loading-skeleton";
import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import * as S from "./styles";

export const TrackPlay = () => {
  const [loading, setLoading] = useState(true);

  //выполняется при первом рендере
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <S.PlayerTrackPlay>
      <S.TrackPlayContain>
        <S.TrackPlayImage>
          {loading ? (
            <Skeleton style={{ width: "51", height: "51" }} />
          ) : (
            <S.TrackPlaySvg alt="music">
              <use xlinkHref={`${Icons}#icon-note`} />
            </S.TrackPlaySvg>
          )}
        </S.TrackPlayImage>
        <S.TrackPlayAuthor>
          {loading ? (
            <Skeleton style={{ width: "49", height: "15" }} />
          ) : (
            <S.TrackPlayAuthorLink>Ты та...</S.TrackPlayAuthorLink>
          )}
        </S.TrackPlayAuthor>
        <S.TrackPlayAlbum>
          {loading ? (
            <Skeleton style={{ width: "49", height: "15" }} />
          ) : (
            <S.TrackPlayAlbumLink href="http://">Баста</S.TrackPlayAlbumLink>
          )}
        </S.TrackPlayAlbum>
      </S.TrackPlayContain>
      <S.TrackPlayLikeDis>
        <S.TrackPlayLike>
          <S.TrackPlayLikeSvg alt="like">
            <use xlinkHref={`${Icons}#icon-like`}></use>
          </S.TrackPlayLikeSvg>
        </S.TrackPlayLike>
        <S.TrackPlayDislike>
          <S.TrackPlayDislikeSvg alt="dislike">
            <use xlinkHref={`${Icons}#icon-dislike`}></use>
          </S.TrackPlayDislikeSvg>
        </S.TrackPlayDislike>
      </S.TrackPlayLikeDis>
    </S.PlayerTrackPlay>
  );
};
//btn-icon
