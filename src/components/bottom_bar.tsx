import Image from "next/image";
import logo from "../assets/bus_logo.jpg";
import mapPin from "../assets/map_pin.svg";
function BottomBar() {
  return (
    <div className="flex bg-slate-400 w-full h-4/12 px-14 py-8 justify-evenly mt-10">
      <div className="w-1/3">
        <Image
          alt="Logo"
          src={logo}
          height={100}
          width={100}
          className=""
        ></Image>
        <p className="text-sm mt-4 w-96">
          With just a few clicks, I secured my bus booking for an exciting
          weekend getaway, ensuring a comfortable journey ahead. The convenience
          of online reservations makes travel planning a breeze!
        </p>
      </div>
      <div className="w-40 ml-3">
        <p className="font-semibold text-sm pb-4">About Us</p>
        <p className="text-sm  my-2.5">About Us</p>
        <p className="text-sm my-2.5">Contact Us</p>
        <p className="text-sm my-2.5">Privacy Policy</p>
        <p className="text-sm">Terms and Condition</p>
      </div>
      <div className="w-40 ml-3">
        <p className="font-semibold text-sm pb-4">Services</p>
        <p className="text-sm  my-2.5">Safety Guarantee</p>
        <p className="text-sm my-2.5">FAQ & Support</p>
        <p className="text-sm my-2.5">Luxury Buses</p>
        <p className="text-sm">Enough Facilities</p>
      </div>
      <div className="w-52 ml-3">
        <p className="font-semibold text-sm pb-4">Get In Touch</p>
        <div className="flex ">
          <Image alt="map image" src={mapPin} className="mr-2"></Image>
          <div>
            <p className="text-xs  my-1">For Support & Reservations</p>
            <p className="text-sm  my-1">123,Main Street, Anytown,USA</p>
          </div>
        </div>
        <div className="flex ">
          <Image alt="map image" src={mapPin} className="mr-2"></Image>
          <div>
            <p className="text-xs  my-1">For Support & Reservations</p>
            <p className="text-sm  my-1">123,Main Street, Anytown,USA</p>
          </div>
        </div>{" "}
        <div className="flex ">
          <Image alt="map image" src={mapPin} className="mr-2"></Image>
          <div>
            <p className="text-xs  my-1">For Support & Reservations</p>
            <p className="text-sm  my-1">123,Main Street, Anytown,USA</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BottomBar;
