import { DefaultLayout } from "@/layouts/default";
import { Home } from "@/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export function AppRoutes() {
  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<DefaultLayout/>}>
          <Route path="/" element={<Home />}/>
        </Route>
      </Routes>
    </Router>
  )
}