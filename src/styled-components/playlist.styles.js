import styled from "styled-components";

export const ContentPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const PlaylistItemS = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`;

export const PlaylistTrack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TrackTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 447px;
`;

export const TrackTitleText = styled.div``;

export const TrackTitleImage = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: ${(props) => props.theme.backgroundTrackTitleSvg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 17px;
`;

export const TrackTitleSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: ${(props) => props.theme.playlistColor};
`;

export const TrackTitleLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color};
`;

export const TrackTitleSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4e4e4e;
`;

export const TrackAuthor = styled.div`
  width: 321px;
  display: flex;
  justify-content: flex-start;
`;

export const TrackAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color};
  text-align: left;
`;

export const TrackAlbum = styled.div`
  width: 245px;
`;

export const TrackAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.playlistColor};
`;

export const TrackTime = styled.div``;

export const TrackTimeSvg = styled.svg`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: ${(props) => props.theme.playlistColor};
`;

export const TrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color:${(props) => props.theme.playlistColor};
`;

export const PlaylistTitleCol01 = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: ${(props) => props.theme.playlistColor};
  text-transform: uppercase;

  width: 447px;
`;

export const PlaylistTitleCol02 = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: ${(props) => props.theme.playlistColor};
  text-transform: uppercase;

  width: 321px;
`;

export const PlaylistTitleCol03 = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: ${(props) => props.theme.playlistColor};
  text-transform: uppercase;

  width: 245px;
`;

export const PlaylistTitleCol04 = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: ${(props) => props.theme.playlistColor};
  text-transform: uppercase;

  width: 60px;
  text-align: end;
`;

export const PlaylistTitleSvg = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: ${(props) => props.theme.playlistColor};
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;
