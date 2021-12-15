import { FiRefreshCw } from "react-icons/fi";
import { useGroups } from "../../providers/Groups";
import { useHabits } from "../../providers/Habit";
import api from "../../services/api";

const RefreshButton = ({ type, data }) => {
  // type deve ser habits ou goals
  const { id } = data;
  const token = localStorage.getItem("@financeHabits:token");
  const { toGetHabits } = useHabits();
  const { allGroupsUser } = useGroups();

  const handleRefresh = () => {
    api
      .patch(
        `/${type}/${id}/`,
        { how_much_achieved: 0, achieved: false },
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
  };

  return (
    <FiRefreshCw
      color="#0090Ad"
      onClick={handleRefresh}
      style={{ cursor: "pointer" }}
    />
  );
};

export default RefreshButton;
