import { HeaderBox } from "./style";
import { CreateButton } from "../CreateButton";

const SubHeader = ({ type, tittle = "", children, onClick }) => {
  return (
    <>
      {type === "Habit" ? (
        <HeaderBox>
          Meus Hábitos
          <CreateButton type={type} />
        </HeaderBox>
      ) : type === "Group" ? (
        <HeaderBox>
          Meus Grupos
          <CreateButton type={type} />
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
