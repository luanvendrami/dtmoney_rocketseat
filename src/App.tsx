import { GlobalStyle } from "./styles/global";
import { Header } from "./Components/Header"
import { Dashboard } from "./Dashboard";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  )
}
