import React from "react";
import Settings from "./Settings";
import Info from "./Info";
import Credits from "./Credits";
import Development from "./Development";
import IndexPage from "./IndexPage";

export default {
  Settings: <Settings />,
  Info: <Info />,
  Credits: <Credits />,
  Development: <Development />,
  Tasks: <IndexPage reducerName="tasks" />,
  Collectibles: <IndexPage reducerName="collectibles" />,
  Achievements: <IndexPage reducerName="achievements" />,
  Build: <IndexPage reducerName="items" />,
};
