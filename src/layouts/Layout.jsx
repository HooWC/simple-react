import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <div className="App">
      <Navbar />
      <main style={{ padding: '0 1rem' }}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;