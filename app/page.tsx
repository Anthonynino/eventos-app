import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Magazine from "./components/Magazine";

export default function Home() {
  return (
    <>
    <Header/>
    <div className="flex flex-col bg-[#f2f2f2] items-center justify-between min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      
        <Content/>
        <Magazine/>
      
    </div>

    <Footer/>
    </>

  );
}
