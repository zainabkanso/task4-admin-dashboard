
import StatCard from "../components/StatCard";

// Dashboard statistics
const stats = [
  {
    title: "Total Courses",
    value: 6,
    icon: "book",
  },
  {
    title: "Total Students",
    value: 24,
    icon: "people",
  },
  {
    title: "Total Registrations",
    value: 32,
    icon: "clipboard-check",
  },
  {
    title: "Active Courses",
    value: 4,
    icon: "check-circle",
  },
];

function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* Page Heading */}
      <div className="page-heading">
        <p className="section-label">OVERVIEW</p>

        <h1>Dashboard Overview</h1>

        <p className="text-muted">
          Welcome back! Here's what's happening
          at Improve AC.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="row g-4">

        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        ))}

      </div>

    </div>
  );
}

export default Dashboard;
