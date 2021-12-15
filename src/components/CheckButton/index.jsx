import { FiCheck } from "react-icons/fi";
import { useGroups } from "../../providers/Groups";
import { useHabits } from "../../providers/Habit";
import api from "../../services/api";

const CheckButton = ({ type, data }) => {
  // type deve ser habits ou goals
  const { id, how_much_achieved } = data;
  const token = localStorage.getItem("@financeHabits:token");
  const { toGetHabits } = useHabits();
  const { allGroupsUser } = useGroups();
  const computedCheck = how_much_achieved + 10; //TENTAR useSTATE

  const handleCheck = () => {
    if (how_much_achieved === 90) {
      api
        .patch(
          `/${type}/${id}/`,
          { how_much_achieved: computedCheck, achieved: true },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((_) => {
          if (type === "habits") {
            toGetHabits();
          } else if (type === "goals") {
            allGroupsUser();
          }
        });
    } else if (how_much_achieved < 90) {
      api
        .patch(
          `/${type}/${id}/`,
          { how_much_achieved: computedCheck },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((_) => {
          if (type === "habits") {
            toGetHabits();
          } else if (type === "goals") {
            allGroupsUser();
          }
        });
    }
  };
  toGetHabits();
  return (
    <FiCheck
      color="#0090Ad"
      onClick={handleCheck}
      style={{ cursor: "pointer" }}
    />
  );
};

export default CheckButton;
