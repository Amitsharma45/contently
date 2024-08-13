import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import GuestRoute from "@/routes/guestRoute";

export const metadata = {
  title: "Expert Content Writing Services Online | Contently Writers Get Top-Quality Content Writing Services by Professionals",
  description: `Need top-notch content? Contently expert writers craft 100% original, industry-specific content to boost your online visibility.
  Are you looking for top-notch content writing services? Contently connects you with skilled writers who craft original, plagiarism-free content tailored for diverse industries.`,
};


export default function HomeLayout({ children }) {
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
