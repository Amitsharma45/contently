import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";

export default function PolicyLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="mt-[80px] bg-[#f9f9f9] ">{children}</div>
      <Footer />
    </div>
  );
}
