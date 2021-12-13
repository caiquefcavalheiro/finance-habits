// import {useState, useEffect} from 'react';

// import Edit from "../../components/Edit";
import Header from '../../components/Header';
import {Header as SubHeader} from '../../components/BoardHabits/style';
import {Container} from '../../components/BoardHabits/style';
import {SecondaryContainer} from '../Habit/style';
import ListNavButtons from '../../components/ListNavButtons';
import { useParams } from 'react-router-dom';

function Groups() {
  const params = useParams();

  // const token = localStorage.getItem("@financeHabits:token");
  const userGroups = JSON.parse(localStorage.getItem("@financeHabits:userGroups"));

  const currentGroup = userGroups.find(elem => elem.id === Number(params.id));
  const currentGroupIndex = userGroups.indexOf(currentGroup);

  return (
    <>
      {/* <Edit /> */}
      <Header/>
      <Container>
        <SecondaryContainer>
          <ListNavButtons list={userGroups} index={currentGroupIndex} id={params.id} type='group'/>
          <div>
            <SubHeader>
              {currentGroup.name}
            </SubHeader>
          </div>
        </SecondaryContainer>
      </Container>
    </>
  );
}

export default Groups;
