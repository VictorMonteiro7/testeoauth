import { Routes } from "./Components/Routes";
import { ContextProvider } from "./context/MainContext";
import * as S from './Styles/MainStyle'
function App() {
  return (
    <S.Container>
      <ContextProvider>
        <Routes/>
      </ContextProvider>
    </S.Container>
  );
}

export default App;
