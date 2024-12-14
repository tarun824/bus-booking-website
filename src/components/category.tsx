import Image from "next/image";
import bus1 from "../assets/bus1.png";
import bus2 from "../assets/bus2.png";

function Category() {
  return (
    <div>
      {/* top heading */}
      <div className="flex justify-between mt-10">
        <div className="text-lg">Category</div>
        <button className="text-sm text-blue-500 ">View all</button>
      </div>

      <div className="h-56 flex justify-between mt-2 ">
        <Image alt="Bus Image" src={bus1} className=" w-min rounded-lg"></Image>
        <Image alt="Bus Image" src={bus2} className=" w-min rounded-lg"></Image>
        <Image alt="Bus Image" src={bus1} className=" w-min rounded-lg"></Image>
      </div>
    </div>
  );
}
export default Category;
