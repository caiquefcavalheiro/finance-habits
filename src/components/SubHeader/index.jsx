import { PlusButton, HeaderBox } from "./style";

const SubHeader = ({ type, tittle = "", children, onClick }) => {
  return (
    <>
      {type === "Habit" ? (
        <HeaderBox>
          Meus Hábitos 
          <PlusButton onClick={onClick} />
        </HeaderBox>
      ) : type === "Group" ? (
        <HeaderBox>
          Meus Grupos
          <PlusButton onClick={onClick} />
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
