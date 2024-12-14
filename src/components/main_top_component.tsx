import Image from "next/image";
import bus1 from "../../public/bus_main.png";
// import imageBg from "../assets/main_bg.png";

function MainTopComponent() {
  return (
    <div
      className="w-full h-[87vh] "
      style={{
        backgroundImage: `url('/main_bg.png')`,
        // height: "972px",
      }}
    >
      <div className="flex pl-16 pt-16 pb-4 items-end h-full justify-between">
        {/* Text */}
        <div className="flex-col">
          <h3 className="font-bold text-5xl mr-4 w-1/2  tracking-wide text-white">
            Reserve your Bus Tickets Now
          </h3>
          <h3 className="text-base w-1/2 mt-12 mb-16  text-white">
            Reserve your Bus Tickets Now Reserve your Bus Tickets Now Reserve
            your Bus Tickets Now
          </h3>
          <button
            type="button"
            // style={{ width: "280px" }}
            className="text-white mb-36 px-4 py-2   bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Reserve Seat Now
          </button>
        </div>
        <Image alt="Bus Image" src={bus1} width={550}></Image>
      </div>
    </div>
  );
}
export default MainTopComponent;
