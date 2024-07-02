import { useSelector } from "react-redux";
import JobCards from "./components/JobCard";
import Filters from "./components/Filters";
import jobs from "./data/data.json";

function App() {
  const filters = useSelector((state) => state.filters);

  return (
    <div className="App">
      {/* header */}
      <div className="header"></div>

      {/* filters array length > 0 => show Filters component */}
      {filters.length > 0 && <Filters filters={filters} />}

      {/* filters array length = 0 => show all jobs (JobCard) */}
      {/* filters array length > 0 => show filtered jobs (JobCard) */}
      <div className="container">
        {jobs.map((jobs) => {
          const jobTags = [
            jobs.role,
            jobs.level,
            ...(jobs.languages || []),
            ...(jobs.tools || []),
          ];

          const filteredJobs = filters.every((tag) => jobTags.includes(tag));

          return filters.length === 0 ? (
            <JobCards
              key={jobs.id}
              logo={jobs.logo}
              company={jobs.company}
              position={jobs.position}
              postedAt={jobs.postedAt}
              contract={jobs.contract}
              location={jobs.location}
              isFeatured={jobs.featured}
              isNew={jobs.new}
              jobTags={jobTags}
            />
          ) : (
            filteredJobs && (
              <JobCards
                key={jobs.id}
                logo={jobs.logo}
                company={jobs.company}
                position={jobs.position}
                postedAt={jobs.postedAt}
                contract={jobs.contract}
                location={jobs.location}
                isFeatured={jobs.featured}
                isNew={jobs.new}
                jobTags={jobTags}
              />
            )
          );
        })}
      </div>
    </div>
  );
}

export default App;
