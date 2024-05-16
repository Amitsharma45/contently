import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";

export default function HomeLayout({ children }) {
  return (
    <div className="relative">
       {/* <div className="absolute w-10 h-10 bg-red-400 bottom-[100px] right-5 z-10">
        sddgdgdg
      </div> */}
      <Navbar />
      <div className="mt-[80px]">{children}</div>
      <Footer />
     
    </div>
  );
}
