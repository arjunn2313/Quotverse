import Home from "./components/home";
import Feed from "./components/home";
import LeftBar from "./components/leftBar";
import Likes from "./components/likes";
import RightBar from "./components/rightBar";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="text-white grid grid-cols-9">
      <LeftBar />
      <Home/>
      <RightBar />
    </div>
  );
}

export default App;
