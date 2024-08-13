import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import GuestRoute from "@/routes/guestRoute";

export const metadata = {
  title: " Expert Assignment Help for Various Subjects",
  description: `Unlock the potential of your projects with our versatile writing services. Find skilled writers across diverse subjects for engaging content solutions`,
};


export default function SubjectLayout({ children }) {
  return (
    <GuestRoute>
      <div>
        <Navbar />
        <div className="mt-[80px]">{children}</div>
        <Footer />
      </div>
    </GuestRoute>
  );
}
