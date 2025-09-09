import Navbar from "./_components/Navbar";
import { Outlet } from "react-router-dom";

export default function AdminTemplate() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
