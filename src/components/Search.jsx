import { useState } from "react";

const Search = ({ setIPAddress, fetchLocation }) => {
  const [input, setInput] = useState("");

  const handleClick = () => {
    setIPAddress(input);
    fetchLocation(input);
  };

  return (
    <div className="h-2/5 min-w-full search-bar-container bg-cover flex flex-col gap-5 justify-center items-center">
      <div className="md:w-1/2 sm:w-1/2 lg:w-1/3 flex justify-center items-center h-10 font-medium space-x-4">
        <input
          type="text"
          className="w-4/5 h-full rounded-md border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none placeholder:text-muted-foreground text-lg border border-gray-300"
          placeholder="Enter the IP Address here.."
          onChange={(e) => setInput(e.target.value)}
        />
        <div
          className=" h-full flex justify-center items-center cursor-pointer"
          onClick={handleClick}
        >
          <button className="bg-blue-500 border rounded-md px-5 py-2 font-medium">
            Find
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
