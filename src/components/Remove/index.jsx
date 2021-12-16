import { FiX } from "react-icons/fi";

import { useHabits } from "../../providers/Habit";
import { useGroups } from "../../providers/Groups";
import { useGoals } from "../../providers/Goals";
import { Container } from "./style";
import { useActivies } from "../../providers/Activities";

const Remove = ({ type, data }) => {
  const { toDeleteHabit } = useHabits();
  const { unsubscribeGroup } = useGroups();
  const { toDeleteGoals } = useGoals();
  const { toDeleteActivities } = useActivies();

  const toRemove = () => {
    switch (type) {
      case "group":
        unsubscribeGroup(data);
        break;
      case "habit":
        toDeleteHabit(data);
        break;
      case "goals":
        toDeleteGoals(data);
        break;
      case "activitie":
        toDeleteActivities(data);
        break;

      default:
        return;
    }
  };

  return (
    <Container>
      <FiX onClick={toRemove} />
    </Container>
  );
};

export default Remove;
