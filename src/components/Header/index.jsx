import { MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import {
  ContainerIcon,
  ContainerButtons,
  Container,
  Icon,
  ContainerMenu,
} from "./style";
import Button from "../Button";
import Signup from "../Signup";
import { Redirect, useHistory } from "react-router-dom";

function Header({ setAuthenticated }) {
  const history = useHistory();
  const historyPath = history.location.pathname;
  const [anchor, setAnchor] = useState("");
  const [signup, setSignup] = useState(false);

  const [nameButton1, setNameButton1] = useState();
  const [nameButton2, setNameButton2] = useState();
  const [redirectButton1, setRedirectButton1] = useState("");
  const [redirectButton2, setRedirectButton2] = useState("");
  const [groups, setGroups] = useState("");

  const [menu, setMenu] = useState(false);

  function ClickIcon(event) {
    setMenu(true);
    setAnchor(event.currentTarget);
  }

  function Logout() {
    if (setAuthenticated !== undefined) {
      setAuthenticated(false);
    }
    localStorage.clear();
    return <Redirect to="/" />;
  }

  function defineButtons() {
    if (
      historyPath !== "/" &&
      historyPath !== "/signin" &&
      historyPath !== "/signup"
    ) {
      setNameButton1("Home");
      setRedirectButton1("/dashboard");
      setNameButton2("Sair");
      setRedirectButton2();
      setGroups("");
    } else {
      setNameButton1("Entrar");
      setRedirectButton1("/signin");
      setNameButton2("Cadastrar");
      setRedirectButton2("/signup");
      setGroups("none");
    }
  }

  useEffect(() => {
    defineButtons();
  }, []);

  return (
    <Container>
      <h1>Finance Habits</h1>
      <div>
        <ContainerIcon>
          <Icon onClick={(event) => ClickIcon(event)}>
            <FiMenu />
          </Icon>
          <ContainerMenu
            anchorEl={anchor}
            id="basic-menu"
            open={menu}
            onClose={() => setMenu(false)}
          >
            <MenuItem onClick={() => history.push(redirectButton1)}>
              {nameButton1}
            </MenuItem>
            <hr />
            <MenuItem
              onClick={() => history.push("/groups")}
              style={{ display: groups }}
            >
              Mais Grupos
            </MenuItem>
            <hr />
            <MenuItem
              onClick={
                nameButton2 === "Sair"
                  ? () => Logout()
                  : () => history.push(redirectButton2)
              }
            >
              {nameButton2}
            </MenuItem>
          </ContainerMenu>
        </ContainerIcon>
        <ContainerButtons>
          <Button white onClick={() => history.push(redirectButton1)}>
            {nameButton1}
          </Button>
          <Button
            white
            onClick={() => history.push("/groups")}
            style={{ display: groups }}
          >
            Mais Grupos
          </Button>
          <Button
            white
            onClick={
              nameButton2 === "Sair"
                ? () => Logout()
                : () => history.push(redirectButton2)
            }
          >
            {nameButton2}
          </Button>
        </ContainerButtons>
      </div>
      <Signup signup={signup} setSignup={setSignup} />
    </Container>
  );
}

export default Header;
