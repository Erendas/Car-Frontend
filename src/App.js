import BookCarView from "./features/BookCarView";
import Footer from "./features/Footer";
import HeroSection from "./features/HeroSection";
import Navbar from "./features/Navbar";
import PlanTrip from "./features/PlanTrip";
import VehicleModels from "./features/VehicleModels";
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="App">
      <Toaster />
      <div className="bg-[url('./images/wallpaper.jpg')] bg-left h-screen">
        <Navbar />   
        <HeroSection />   
      </div>
      <BookCarView />
      <PlanTrip />
      <VehicleModels />
      <Footer />
    </div>
  );
}

export default App;
