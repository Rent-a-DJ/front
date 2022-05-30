import React, {ReactElement, useContext} from "react";
import UserContext from "../contextes/UserContext";
import SidebarAdmin from "./sidebar/SidebarAdmin";
import {useNavigate} from "react-router-dom";

type Props = {
  isAdmin: boolean
  children: ReactElement<any, any>;
}

const PrivateRoute: React.FC<Props> = (props) => {
  const userContextValue = useContext(UserContext);
  const navigate = useNavigate();

  if (userContextValue.user == null || (props.isAdmin && !userContextValue.user.isAdmin)) {
    navigate("/");
    return <></>;
  }

  if (props.isAdmin) {
    return (
      <div className={"flex fullWidth fullHeight"}>
        <SidebarAdmin/>
        <div className={"fullWidth fullHeight"}>
        {props.children}
        </div>
      </div>
    )
  }
  return (
    <>
      {props.children}
    </>
  )
}

export default PrivateRoute;
