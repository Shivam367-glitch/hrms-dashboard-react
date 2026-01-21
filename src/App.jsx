
import './App.css'
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import DashboardLayout from './layout/DashboardLayout';
function App() { 

  const routes = [
  { path: "/", element: <Dashboard />, title: "Dashboard" },
];
  return (
   <BrowserRouter>
      <DashboardLayout  routes={routes}>
        <Routes>
          {routes.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  )
}

export default App
