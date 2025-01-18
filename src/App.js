import { useContext } from 'react';
import './App.css';
import Counter from './component/Counter';
import PaginationComp from './component/PaginationComp';
import Stopwatch from './component/Stopwatch';
import ToDo from './component/ToDo';
import { ThemeContext } from './component/ThemeProvider';
import UnControlledComp from './component/UnControlledComp';
import List from './component/List';
import GreetForm from './component/GreetForm';
import RenderJson from './component/RenderJson';
import Information from './component/Information';

function App() {
  const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <div>
      {/* <Counter/> */}
      {/* <Information/> */}
      <List/>
      {/* <GreetForm/> */}
      {/* <RenderJson/> */}
       {/* <button onClick={toggleTheme}>{theme === "light"? "dark": "light"}</button> */}
      {/* <ToDo/> */}
      {/* <Stopwatch/> */}
      {/* <PaginationComp/> */}
      {/* <UnControlledComp/> */}
    </div>
  );
}

export default App;
