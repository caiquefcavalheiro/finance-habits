import { HeaderBox, PlusButton } from "./style";
import { EditButton } from "../EditButton";

const SubHeader = ({ type, tittle = "", children, onClick }) => {
  return (
    <>
      {type === "Habit" ? (
        <HeaderBox>
          Meus Hábitos
          <EditButton type={type} />
        </HeaderBox>
      ) : type === "Group" ? (
        <HeaderBox>
          Meus Grupos
          <EditButton type={type} />
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
