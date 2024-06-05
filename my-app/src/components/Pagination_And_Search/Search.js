import React from "react";

function Search({ searchJob, search }) {
  return (
    <form className="w-full my-4 mx-2">
      <div className="flex">
        <div className="flex w-full max-w-sm">
          <input
            type="text"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 border-[1px] border-r-0 focus:border-[1px]  focus:outline-none  "
            placeholder="Search "
            onChange={(e) => {
              searchJob(e.target.value);
            }}
            value={search}
          />
          <button
            type=""
            className="border-[1px] border-l-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-black"
          >
            {search.length <= 0 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                onClick={(e) => {
                  e.preventDefault();
                  searchJob("");
                }}
              >
                <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}

export default Search;
