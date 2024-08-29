import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Landing from "./pages/Landing";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Landing />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
