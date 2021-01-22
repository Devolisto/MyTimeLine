import Main from "./components/Main";
import Timeline from "./components/Timeline";
import {ThemeProvider} from "styled-components";
import { GlobalStyle } from "./styles";

const theme = {
  fontColorMain : "#648DE5",
  backgroundMain : "#E8E5DA"
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Main />
      <Timeline/>
    </ThemeProvider>
  )
}

export default App;




 // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );