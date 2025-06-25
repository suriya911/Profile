import Header from "../components/Header";
import About from "../components/About";
// import Experience from "../components/Experience";
// import HoverCards from "../components/HoverCards";
import BottomNav from "../components/BottomNav";
// import BigHoverCard from "../components/BigHoverCard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between transition-colors duration-300">
      <Header />
      <main className="flex flex-col gap-16 flex-1">

      </main>
      <BottomNav />
    </div>
  );
}
