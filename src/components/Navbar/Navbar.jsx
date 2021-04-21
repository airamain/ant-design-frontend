import React, { useContext } from "react";
import { HomeFilled, FileTextFilled, LogoutOutlined } from "@ant-design/icons";
import userContext from '../../context/user/userContext';
import CreateUser from "../User/CreateUser";
import { Menu, Button, Switch } from "antd";
import { Link } from "react-router-dom";
import LogIn from "../LogIn/LogIn";
import "./Navbar.css";

export default function Navbar({ darkMode, setDarkMode }) {
  const {user, cerrarSesion} = useContext(userContext),
  logOut = () => cerrarSesion();

  return (
    <div>
      {darkMode === false ? (
        <Menu className="tophead">
           <Switch
            style={{ marginLeft: "20px", marginRight: "20px" }}
            checkedChildren="Light"
            unCheckedChildren="Dark"
            defaultChecked
            onClick={() => setDarkMode(true)}
          />
          <Link to="/">
            <HomeFilled style={{ marginRight: "10px" }} />
            Inicio
          </Link>
         
          {
            user && user.token ?
            <>
              <Link to="/list" style={{ marginLeft: "20px" }}>
                <FileTextFilled style={{ marginRight: "10px" }} />
                Listar Usuarios
              </Link>
              <Button className="mouseHover"
                style={{ marginRight: "20px", marginLeft: "20px" }}
                type="secondary"
                shape="circle"
                onClick={logOut}
                icon={<LogoutOutlined />}
              />
            </> :
            <>
              <CreateUser />
              <LogIn />
            </>
          }
        </Menu>
      ) : (
        <Menu className="tophead">
           <Switch
            style={{  marginLeft: "20px", marginRight: "20px" }}
            checkedChildren="Light"
            unCheckedChildren="Dark"
            defaultChecked
            onClick={() => setDarkMode(false)}
          />
          <Link to="/">
            <HomeFilled style={{ marginRight: "10px" }} />
            Inicio  
          </Link>
         
          {
            user && user.token ?
            <>
              <Link to="/list" style={{ marginLeft: "20px" }}>
                <FileTextFilled style={{ marginRight: "10px" }} />
                Listar Billeteras
              </Link>
              <Button className="mouseHover"
                style={{ marginRight: "20px", marginLeft: "20px" }}
                type="secondary"
                shape="circle"
                onClick={logOut}
                icon={<LogoutOutlined />}
              />
            </> :
            <>
              <CreateUser />
              <LogIn />
            </>
          }
        </Menu>
      )}
    </div>
  );
}
