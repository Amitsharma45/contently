import DashBoardFooter from "@/components/main/dashboard/footer/index";
import NavbarDashBoard from "@/components/main/dashboard/navbar/index";

export default function DashBoardLayout({ children }) {
  return (
    <div>
      <NavbarDashBoard />
        <div className="min-h-[400px]" >{children}</div>
      <DashBoardFooter />
    </div>
  );
}
