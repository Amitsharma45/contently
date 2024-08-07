import DashBoardFooter from "@/components/main/dashboard/footer/index";
import NavbarDashBoard from "@/components/main/dashboard/navbar/index";
import ProtectedRoute from "@/routes/protected";

export default function DashBoardLayout({ children }) {
  return (
    <ProtectedRoute>
      <div>
        <NavbarDashBoard />
        <div className="">{children}</div>
        <DashBoardFooter />
      </div>
    </ProtectedRoute>
  );
}
