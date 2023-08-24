import Icons from "../assets/img/icon/sprite.svg";
import Skeleton from "react-loading-skeleton";
import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import * as S from "../styled-components/bar.styles";
import { useThemeContext } from "../contexts/theme";

export const TrackPlay = ({ track }) => {
  const [loading, setLoading] = useState(true);
  const { theme } = useThemeContext();
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
        <S.TrackPlayImage theme={theme}>
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
            <S.TrackPlayAuthorLink theme={theme}>
              {track.name}
            </S.TrackPlayAuthorLink>
          )}
        </S.TrackPlayAuthor> 
        <S.TrackPlayAlbum>
          {loading ? (
            <Skeleton style={{ width: "49", height: "15" }} />
          ) : (
            <S.TrackPlayAlbumLink theme={theme} href="http://">
              {track.author}
            </S.TrackPlayAlbumLink>
          )}
        </S.TrackPlayAlbum>
      </S.TrackPlayContain>
    </S.PlayerTrackPlay>
  );
};
//btn-icon
