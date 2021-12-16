import { useEffect, useState } from "react";
import CardSearch from "../../components/CardSearch";
import { useGroups } from "../../providers/Groups";
import { DisplayContainer } from "../../components/DisplayContainer";
import SubHeader from "../../components/SubHeader";
import Header from "../../components/Header";
import { Main } from "./style";

const PageGroup = ({ authenticated, setAuthenticated }) => {
  
  useEffect(() => {
    allGroups();
  }, []);

  const id = Number(localStorage.getItem('@financeHabits:user_id'))

  const { groupList, allGroups } = useGroups();
  const unsubscribedGroups = groupList.filter(elem => elem.users_on_group.every(user => user.id !== id))
  // console.log('total',groupList)
  // console.log('user',userGroups)
  // console.log('unsibscribed',unsubscribedGroups)
  const [groupFiltered, setGroupFiltered] = useState(unsubscribedGroups);

  

  const filteredGroup = (item) => {
    if (item === "") {
      setGroupFiltered(unsubscribedGroups);
    } else {
      setGroupFiltered(
        unsubscribedGroups.filter(
          (i) =>
            i.category.toLowerCase().includes(item.toLowerCase()) ||
            i.name.toLowerCase().includes(item.toLowerCase())
        )
      );
    }
  };

  // if (!authenticated) {
  //   return <Redirect to="/" />;
  // }

  return (
    <>
      <Header setAuthenticated={setAuthenticated} />
      <DisplayContainer type="grid">
        <SubHeader tittle="Escolha um grupo para participar">
          <input
            placeholder="busque um grupo"
            onChange={(e) => {
              filteredGroup(e.target.value);
            }}
          />
        </SubHeader>
        <Main>
          {groupFiltered.map((item) => (
            <CardSearch item={item} key={item.id} />
          ))}
        </Main>
      </DisplayContainer>
    </>
  );
};

export default PageGroup;
