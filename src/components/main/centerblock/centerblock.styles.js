import styled from "styled-components";

export const MainCenterblock = styled.div`
  width: auto;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;
`;

export const CenterblockH2 = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`;

export const CenterblockSearch = styled.div`
  width: 100%;
  border-bottom: 1px solid #4e4e4e;
  margin-bottom: 51px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CenterblockSearchSvg = styled.svg`
  width: 17px;
  height: 17px;
  margin-right: 5px;
  stroke: #ffffff;
  fill: transparent;
`;
export const CenterblockSearchText = styled.input`
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  &::placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const CenterblockFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 51px;
  gap: 10px;
`;

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
  color: #ffffff;
`;

export const CenterblockContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterWrapper = styled.div`
  position: relative;
`;

export const FilterItem = styled.li`
  display: flex;
  width: 119px;
  height: 24px;

  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  transition: 0.2s all;
  &:hover {
    color: #ad61ff;
    text-decoration: underline;
  }
  &:active {
    color: #ad61ff;
    text-decoration: underline;
  }
}`;

export const FilterButtonBadge = styled.div`
  position: absolute;
  width: 26px;
  height: 26px;
  background-color: rgb(173, 97, 255);
  border-radius: 50%;
  right: -8px;
  top: -10px;
  z-index: 1;
  text-align: center;
`;

export const FilterButtonHeaderBox = styled.div`
  position: absolute;

  width: 248px;
  height: 305px;

  top: 50px;
  left: 0;

  border-radius: 12px;
  padding: 34px;

  background-color: #313131;
  padding-top: 36.5px;
  padding-left: 34px;
  padding-right: 34px;
  padding-bottom: 36.5px;
  box-sizing: border-box;
  cursor: pointer;
}`;

export const FilterButtonHeaderBoxUl = styled.ul`
  width: 176px;
  max-height: 232px;

  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 28px;

  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: #4b4949;
    border-radius: 10px;
    height: 65px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffffff;
    border-radius: 10px;
  }
`;

export const Button = styled.button`
  border-color: #ad61ff;
  color: #ad61ff;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  position: relative;
  color: #ffffff;
  background-color: #181818;
  cursor: pointer;
  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
`;
