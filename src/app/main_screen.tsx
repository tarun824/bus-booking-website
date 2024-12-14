import BottomBar from "@/components/bottom_bar";
import Category from "@/components/category";
import MainTopComponent from "@/components/main_top_component";
import Navbar from "@/components/nav_bar";
import SearchComponent from "@/components/search_component";
import SpecialOffers from "@/components/special_offers";

function MainScreen() {
  return (
    <div className="flex-col h-screen">
      <Navbar />
      <MainTopComponent />
      <div className="mx-28">
        <SearchComponent />
        <Category />
        <SpecialOffers />
      </div>
      <BottomBar />
    </div>
  );
}
export default MainScreen;
