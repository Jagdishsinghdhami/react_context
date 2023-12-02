import logo from "./logo.svg";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1>React context</h1>
      <h2>React context 2nd commit</h2>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
