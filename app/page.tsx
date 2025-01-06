import Content from "../components/Content";
import EventSites from "../components/EventSites";
import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import Magazine from "../components/Magazine";
import MakeBoda from "../components/App/MakeEvent";

export default function Home() {
  return (
    <>
    <Header/>
    <div className="flex flex-col bg-[#f2f2f2] items-center justify-between min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      
        <Content/>
        <EventSites/>
        <Magazine/>
    </div>
    <MakeBoda/>
    <Footer/>
    </>

  );
}
