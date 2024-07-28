import { Gallery } from "@/components/Gallery";
import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import Trustbar from "@/components/Trustbar";

export default function Page() {
  return (
    <div>
      <Header />
      <Hero />
      <Gallery />
      <Trustbar />
      <div className="h-screen w-full"></div>
    </div>
  );
}
