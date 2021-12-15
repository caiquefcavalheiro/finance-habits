import { PlusButton, HeaderBox } from "./style";

const SubHeader = ({ type, tittle = "", children }) => {
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
        <HeaderBox>
          {tittle}
          {children}
        </HeaderBox>
      )}
    </>
  );
};

export default SubHeader;
