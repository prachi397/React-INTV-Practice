import { useContext } from 'react';
import './App.css';
import Counter from './component/Counter';
import PaginationComp from './component/PaginationComp';
import Stopwatch from './component/Stopwatch';
import ToDo from './component/ToDo';
import { ThemeContext } from './component/ThemeProvider';
import UnControlledComp from './component/UnControlledComp';

function App() {
  const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <div>
      <Counter/>
       {/* <button onClick={toggleTheme}>{theme === "light"? "dark": "light"}</button> */}
      {/* <ToDo/> */}
      {/* <Stopwatch/> */}
      {/* <PaginationComp/> */}
      {/* <UnControlledComp/> */}
    </div>
  );
}

export default App;
