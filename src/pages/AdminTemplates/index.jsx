import Navbar from "./_components/Navbar";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function AdminTemplate() {
  const data = useSelector((state) => state.authReducer.data);

  if (!data) {
    return <Navigate to={"/auth"} />;
  }

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
