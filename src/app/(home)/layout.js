import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";

export default function HomeLayout({ children }) {
  return (
    <div>
      <Navbar />
        <div className="mt-[100px]" >{children}</div>
      <Footer />
    </div>
  );
}
