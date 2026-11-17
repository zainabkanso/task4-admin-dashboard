
function StatCard({ title, value, icon }) {
  return (
    <div className="col-12 col-sm-6 ">

      <div className="stat-card">

        <div className="stat-icon">
          <i className={`bi bi-${icon}`}></i>
        </div>

        <p>{title}</p>

        <h2>{value}</h2>

      </div>

    </div>
  );
}

export default StatCard;
