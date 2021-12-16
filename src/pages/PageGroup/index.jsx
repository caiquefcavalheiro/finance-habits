import { useEffect, useState } from "react";
import CardSearch from "../../components/CardSearch";
import { useGroups } from "../../providers/Groups";
import { DisplayContainer } from "../../components/DisplayContainer";
import SubHeader from "../../components/SubHeader";
import Header from "../../components/Header";
import { Main } from "./style";
import { Redirect } from "react-router-dom";

const PageGroup = ({ authenticated, setAuthenticated }) => {
  
  const { groupList, allGroups } = useGroups();
  const [verifySubscribeClick, setVerifySubscribeClick] = useState(false);
  
  const id = Number(localStorage.getItem('@financeHabits:user_id'))

  const [groupFiltered, setGroupFiltered] = useState([]);

  

  const filteredGroup = (item) => {
    if (item === "") {
      setGroupFiltered(groupList.filter(elem => elem.users_on_group.every(user => user.id !== id)));
    } else {
      setGroupFiltered(
        groupFiltered.filter(
          (i) =>
            i.category.toLowerCase().includes(item.toLowerCase()) ||
            i.name.toLowerCase().includes(item.toLowerCase())
        )
      );
    }
  };
  
  useEffect(() => {
    allGroups();
    setGroupFiltered(groupList.filter(elem => elem.users_on_group.every(user => user.id !== id)));

  }, [verifySubscribeClick]);
  
  useEffect(() => {
    setGroupFiltered(groupList.filter(elem => elem.users_on_group.every(user => user.id !== id)));

  }, [groupList]);
  

  if (!authenticated) {
    return <Redirect to="/" />;
  }

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
            <CardSearch item={item} key={item.id} check={setVerifySubscribeClick} itemChecked={verifySubscribeClick}/>
          ))}
        </Main>
      </DisplayContainer>
    </>
  );
};

export default PageGroup;
