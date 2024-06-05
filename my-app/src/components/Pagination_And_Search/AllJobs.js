import React, { useState, useEffect } from "react";
import JobGrid from "./JobGrid";
import axios from "axios";
import Pagination from "./Pagination";
import Search from "./Search";

function AllJobs() {
  const [jobs, setAllJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://cms.mentorwhiz.com/api/jobs`);
        setAllJobs(response.data.data);
      } catch (error) {
        console.error("Error fetching popular stores:", error);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  console.log(jobs);
  let filteredJobs = jobs.filter((val) => {
    if (search === "") return val;
    else if (
      // search by company name or hiring position
      val.attributes.hiring_position
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      val.attributes.company_name.toLowerCase().includes(search.toLowerCase())
    )
      return val;
  });

  const indexofLastPage = currentPage * 12;
  const indexofFirstPage = indexofLastPage - 12;
  let paginatedStores = filteredJobs.slice(indexofFirstPage, indexofLastPage);

  let searchJob = (text) => {
    setCurrentPage(1);
    setSearch(text);
  };

  return (
    <div>
      <Search searchJob={searchJob} search={search} />
      {filteredJobs.length !== 0 ? (
        <>
          <div className="mt-12  w-full">
            <JobGrid jobs={paginatedStores} />
          </div>
          <Pagination
            onPageChange={handlePageChange}
            totalPages={Math.ceil(filteredJobs.length / 12)}
            currentPage={currentPage}
          />
        </>
      ) : (
        <div className="flex justify-center">No Jobs Found</div>
      )}
    </div>
  );
}

export default AllJobs;
