import Blog from "../components/about/blog";
import Destination from "../components/travelsGuild/destination";
import TravelHero from "../components/travelsGuild/travelHero";

const Travels = () => {
  return (
    <div className=" bg-[#f1ebdd]">
      <TravelHero />
      <Destination />
      <Blog />
    </div>
  );
};

export default Travels;
