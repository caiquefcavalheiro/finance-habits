import { PlusButton, HeaderBox } from "./style";

const SubHeader = ({ type, tittle = "" }) => {
  return (
    <>
      {type === "Habit" ? (
        <HeaderBox>
          Meus Hábitos <PlusButton />
        </HeaderBox>
      ) : type === "Group" ? (
        <HeaderBox>
          Meus Grupos
          <PlusButton />
        </HeaderBox>
      ) : (
        <HeaderBox>{tittle}</HeaderBox>
      )}
    </>
  );
};

export default SubHeader;
