import { Link } from "react-router-dom";

const BranchCard = ({ branch }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="branch-card h-100">

        <div className="branch-img-wrap">
          <img
            src={branch.image}
            alt={branch.name}
            className="branch-img"
          />
        </div>

        <div className="branch-body">
          <h5 className="branch-title">{branch.name}</h5>
          <p className="branch-desc">{branch.description}</p>
          <Link to={`/branch/${branch.id}`} className="branch-link">
  See details
</Link>
        </div>

      </div>
    </div>
  );
};

export default BranchCard;
