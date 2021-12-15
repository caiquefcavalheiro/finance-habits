import { useEffect, useState } from "react";

import CardSearch from "../../components/CardSearch";
import { useGroups } from "../../providers/Groups";
import { DisplayContainer } from "../../components/DisplayContainer";
import SubHeader from "../../components/SubHeader";
import Header from "../../components/Header";
import { Main } from "./style";
<<<<<<< HEAD
import { Redirect } from "react-router-dom";

const PageGroup = ({ authenticated, setAuthenticated }) => {
=======

const PageGroup = () => {
>>>>>>> f462c56d96b321fd5b940f3d80f47a79908ad6ea
  const { groupList, allGroups } = useGroups();
  const [groupFiltered, setGroupFiltered] = useState(groupList);

  useEffect(() => {
    allGroups();
  }, []);

  const filteredGroup = (item) => {
    if (item === "") {
      setGroupFiltered(groupList);
    } else {
      setGroupFiltered(
        groupList.filter(
          (i) =>
            i.category.toLowerCase().includes(item.toLowerCase()) ||
            i.name.toLowerCase().includes(item.toLowerCase())
        )
      );
    }
  };

<<<<<<< HEAD
  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header setAuthenticated={setAuthenticated} />
=======
  return (
    <>
      <Header />

>>>>>>> f462c56d96b321fd5b940f3d80f47a79908ad6ea
      <DisplayContainer>
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
