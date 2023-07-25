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
  stroke: ${(props) => props.theme.color};
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
  color: ${(props) => props.theme.color};

  &::placeholder {
    background-color: transparent;
    color: ${(props) => props.theme.color};
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
  color: ${(props) => props.theme.color};
`;

export const CenterblockContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterWrapper = styled.div`
  position: relative;
`;

export const FilterNum = styled.div`
  background: #ad61ff;
  border-radius: 50%;
  position: absolute;
  right: -8px;
  top: -8px;
  width: 26px;
  height: 26px;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FilterDropdownMenu = styled.div`
    position: absolute;
    left: 0;
    top: 100%;
    width: 248px;
    background: var(--bg-gray);
    border-radius: 12px;
    padding: 30px;
    z-index: 1;
    margin-top: 10px;
  }
`;
export const FilterWrapperDropdown = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    gap: 28px;
    overflow: auto;
    max-height: 232px;
    padding-right: 5px;

    &::-webkit-scrollbar {
      width: 4px;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
      background: #4b4949;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: #fff;
    }
  }
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

export const DropdownItem = styled.a`
   {
    font-size: 20px;
    line-height: 24px;
    cursor: pointer;
    color: ${(props) => (props.isSelected ? "#b672ff" : "")};
    &:hover {
      color: #b672ff;
      text-decoration: underline;
    }
  }
`;

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

export const FilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid var(--color-basic-text);
  border-radius: 60px;
  padding: 6px 20px;
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
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid ${(props) => props.theme.color};
  border-radius: 60px;
  padding: 6px 20px;
  position: relative;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.color};
  cursor: pointer;
  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
`;

export const Main = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
