import { useDispatch } from "react-redux";
import { addFilter } from "../redux/filtersSlice";
import "./css/JobCard.css";

/* eslint-disable react/prop-types */
function JobCard({
  company,
  logo,
  isNew,
  isFeatured,
  position,
  postedAt,
  contract,
  location,
  jobTags,
}) {
  const dispatch = useDispatch();

  return (
    <div className="job-card">
      <div className="logo">
        <img src={logo} alt={`${company} logo`} />
      </div>
      <div className="card-details">
        <h2 className="company">{company}</h2>

        {isNew && <h2 className="new-tag">New!</h2>}
        {isFeatured && <h2 className="feature-tag">Featured</h2>}

        <h1 className="position">{position}</h1>
        <p className="description">
          {postedAt} <span>&#8226;</span> {contract} <span>&#8226;</span>
          {location}
        </p>
      </div>

      <div className="card-tags">
        {jobTags.map((tag, index) => {
          return (
            <button
              className="job-tag"
              key={index}
              onClick={() => {
                dispatch(addFilter(tag));
              }}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default JobCard;
