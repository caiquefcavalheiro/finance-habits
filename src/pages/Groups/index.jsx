import {useState, useEffect} from 'react';

import Edit from "../../components/Edit";
import Header from '../../components/Header';
import {Header as SubHeader} from '../../components/BoardHabits/style';
import {Container} from '../../components/BoardHabits/style';
import {SecondaryContainer} from '../Habit/style';
import ListNavButtons from '../../components/ListNavButtons';
import api from '../../services/api';
import { useSignin } from '../../providers/SignIn';

function Groups() {

  const token = localStorage.getItem("@financeHabits:token");
  const {userGroups, getUserGroups, currentId} = useSignin();

  const currentGroup = userGroups.find(elem => elem.id === currentId);
  const currentGroupIndex = userGroups.indexOf(currentGroup);

  return (
    <>
      {/* <Edit /> */}
      <Header/>
      <Container>
        <SecondaryContainer>
          <ListNavButtons list={userGroups} index={currentGroupIndex}/>
          <div></div>
        </SecondaryContainer>
      </Container>
    </>
  );
}

export default Groups;
