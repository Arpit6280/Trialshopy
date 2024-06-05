import React from "react";

function JobGrid({ jobs }) {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 mt-4">
      {jobs?.map((job) => (
        <div
          key={job.id}
          className="p-2 flex flex-col gap-2  shadow-md rounded w-full border hover:shadow-lg"
        >
          <div className="flex justify-between">
            <img src="" alt="compony logo" />
            <p>{job.attributes.company_name}</p>
          </div>
          <div>
            <h5>{job.attributes.hiring_position}</h5>
            <p className="text-sm">{job.attributes.job_location}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default JobGrid;
