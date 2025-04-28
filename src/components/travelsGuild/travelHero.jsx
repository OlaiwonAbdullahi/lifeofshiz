import hero from "../../assets/Travel_cover.png";
const TravelHero = () => {
  return (
    <div>
      {" "}
      <section className="  my-[9vh] md:my-[10vh]  ">
        <img src={hero} alt="" className=" h-[40vh]  md:h-[70vh] w-full" />
      </section>
    </div>
  );
};

export default TravelHero;
