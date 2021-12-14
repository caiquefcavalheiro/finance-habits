import { PlusButton, HeaderBox } from "./style";

<<<<<<< HEAD
const SubHeader = ({ type, tittle = "" }) => {
=======
const SubHeader = ({ type, tittle='', children }) => {
>>>>>>> 0d384c2815ad842a1b96bf9be190ce54ca042d95
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
        <HeaderBox>{tittle}{children}</HeaderBox>
      )}
    </>
  );
};

export default SubHeader;
