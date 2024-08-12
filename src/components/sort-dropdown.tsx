import useDropdown from "@/hooks/use-dropdown";

export default function SortDropdown() {
  const { dropdownButtonRef, dropdownRef, showDropdown, setShowDropdown } =
    useDropdown();

  return (
    <>
      <button
        onClick={() => setShowDropdown((showDropdown) => !showDropdown)}
        className="flex place-items-center hover:bg-gray-100 py-1 px-2 rounded-md active:bg-gray-200"
        ref={dropdownButtonRef}
      >
        <svg
          className="w-5 h-5 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
          />
        </svg>
        Sort
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`${
          showDropdown ? "absolute" : "hidden"
        } top-7 shadow-lg rounded-md text-sm right-0 bg-white text-gray-500 z-20 px-2 py-2`}
        ref={dropdownRef}
      >
        <ul>
          <li className="py-1 px-2 rounded-sm hover:bg-gray-100 active:bg-gray-200">
            <button className="w-full">Newest</button>
          </li>
          <li className="py-1 px-2 rounded-sm hover:bg-gray-100 active:bg-gray-200">
            <button className="w-full">Price low to high</button>
          </li>
          <li className="py-1 px-2 rounded-sm hover:bg-gray-100 active:bg-gray-200">
            <button className="w-full">Price high to low</button>
          </li>
        </ul>
      </div>
    </>
  );
}
