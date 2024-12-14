import Image from "next/image";
import offerImage from "../assets/offer.png";
function SpecialOffers() {
  return (
    <div>
      <div className="text-lg mt-10 mb-2">Special Offers</div>
      <div className="flex my-2 justify-between">
        <div className="flex bg-gray-200 w-5/12 px-12 py-6">
          {" "}
          <Image
            alt="Offer Image"
            src={offerImage}
            width={100}
            height={100}
          ></Image>{" "}
          <div className="flex flex-col justify-between my-3 mx-6">
            <div className="text-base text-black">
              Get upto 40% off on bus booking
            </div>
            <div className="text-xs text-gray-400">valid till XXXX</div>
          </div>
        </div>
        <div className="flex bg-gray-200 w-5/12 px-12 py-6">
          {" "}
          <Image
            alt="Offer Image"
            src={offerImage}
            width={100}
            height={100}
          ></Image>{" "}
          <div className="flex flex-col justify-between my-3 mx-6">
            <div className="text-base text-black">
              Get upto 40% off on bus booking
            </div>
            <div className="text-xs text-gray-400">valid till XXXX</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SpecialOffers;
