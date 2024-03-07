import React, { useState } from "react";
import Search from "./Search";

const App = () => {
  const [userNameFound, setUserNameFoundStatus] = useState(false);

  let toRender = (
    <>
      <h1>Github Profile Searcher</h1>
      <Search userStatusResponse={setUserNameFoundStatus} />
      {userNameFound && "USER NAME EXISTS ON GITHUB."}
    </>
  );
  return toRender;
};

export default App;
