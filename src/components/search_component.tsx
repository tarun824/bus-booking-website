import { Button } from "@material-tailwind/react";
function SearchComponent() {
  return (
    <div className="flex-col mt-10 bg-gray-100 pt-6 pb-10 rounded-xl ">
      <div className="flex justify-evenly w-full mb-8  ">
        <div>
          <label className="block mb-2 text-sm font-semibold text-black ">
            From
          </label>
          <input
            type="text"
            style={{ width: "280px" }}
            className="placeholder-white bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select a location"
            required
          />
        </div>
        <div className="mx-8">
          <label className="block mb-2 text-sm   font-semibold text-black ">
            To
          </label>
          <input
            type="text"
            style={{ width: "280px" }}
            className="placeholder-white bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select a location"
            required
          />
        </div>
        <div className="mx-8">
          <label className="block mb-2 text-sm   font-semibold text-black ">
            Choose Date
          </label>
          <input
            type="date"
            style={{ width: "280px" }}
            className="placeholder-white bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  px-2.5 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
      </div>
      <div className="flex justify-evenly w-full  ">
        <div>
          <label className="block mb-2 text-sm  font-semibold text-black ">
            Choose Time
          </label>
          <input
            type="time"
            style={{ width: "280px" }}
            className="placeholder-white bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mx-8">
          <label className="block mb-2 text-sm  font-semibold text-black ">
            Total Seat
          </label>
          <input
            type="number"
            style={{ width: "280px" }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  px-2.5 py-1.5 dark:bg-gray-700 dark:border-gray-600 placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter total seat"
            required
          />
        </div>

        <button
          type="button"
          style={{ width: "280px" }}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  mt-7 mx-8 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Check Availability
        </button>
      </div>
    </div>
  );
}
export default SearchComponent;
