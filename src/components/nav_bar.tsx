import Image from "next/image";
import logo from "../assets/bus_logo.jpg";
import call from "../assets/call.svg";
function Navbar() {
  return (
    <div className="flex mx-14 my-4 iitems-center justify-between ">
      <div className="flex items-center  ">
        <Image
          alt="Logo"
          src={logo}
          height={100}
          width={100}
          className="rounded-lg"
        ></Image>
        <ul className="mx-20 flex">
          <li className="pr-6">Home</li>
          <li className="pr-6">About</li>
          <li className="pr-6">Bus</li>
          <li className="pr-6">Service</li>
        </ul>
      </div>
      <div className="flex items-center">
        <div className="relative px-6">
          <div
            // type="button"
            // style={{ width: "150px" }}
            className="text-white bg-blue-700 py-3 px-6  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm   dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Check Availability
            <div className="absolute top-1.5 left-2.5 bg-blue-700 rounded-2xl h-8 w-8 p-2.5">
              <Image
                alt="Calling Icon"
                src={call}
                className="absolute top-0.5 left-0.5 bg-white rounded-2xl h-7 w-7 p-1"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
