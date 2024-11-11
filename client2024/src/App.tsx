import { useState } from "react";
import { User, UserContext, defaultUserContext } from "./contexts/UserContext";
import { LoginPage } from "./pages/LoginPage";

import "./App.css";

function App() {
  const [user, setUser] = useState<User>(defaultUserContext.user);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <LoginPage />
    </UserContext.Provider>
  );
}

export default App;
