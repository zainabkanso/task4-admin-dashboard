
import { useState } from "react";

const registrations = [
  {
    id: 1,
    studentName: "Sara Ahmad",
    course: "Web Development",
    registrationDate: "2026-11-10",
    status: "Pending"
  },
  {
    id: 2,
    studentName: "Omar Hassan",
    course: "Graphic Design",
    registrationDate: "2026-11-11",
    status: "Approved"
  },
  {
    id: 3,
    studentName: "Maya Ali",
    course: "Data Science",
    registrationDate: "2026-11-12",
    status: "Rejected"
  }
];

function Registrations() {

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Search and Filter
  const filteredRegistrations = registrations.filter((reg) => {

    const matchesSearch =
      reg.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.course.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || reg.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="registrations-page">

      {/* Page Heading */}
      <div className="page-heading">
        <p className="section-label">MANAGEMENT</p>
        <h1>Registration Management</h1>
        <p className="text-muted">
          Review and manage course registrations.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="row g-3 mb-4">

        <div className="col-md-8">
          <input
            type="search"
            className="form-control"
            placeholder="Search registrations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <select
            className="form-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

      </div>

      {/* Registrations Table */}
      <div className="table-responsive registrations-table">

        <table className="table table-hover align-middle">

          <thead>
            <tr>
              <th>Student Name</th>
              <th>Course</th>
              <th>Registration Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredRegistrations.map((reg) => (

              <tr key={reg.id}>
                <td>{reg.studentName}</td>
                <td>{reg.course}</td>
                <td>{reg.registrationDate}</td>

                <td>
                  <span className={`badge status-${reg.status.toLowerCase()}`}>
                    {reg.status}
                  </span>
                </td>

                {/* UI Only Actions */}
                <td>
                  <div className="d-flex gap-2">

                    <button type="button" disabled
                      className="btn btn-action btn-view"
                      title="View Details">
                      <i className="bi bi-eye"></i>
                    </button>

                    <button type="button" disabled
                      className="btn btn-action btn-approve"
                      title="Approve">
                      <i className="bi bi-check-lg"></i>
                    </button>

                    <button type="button" disabled
                      className="btn btn-action btn-reject"
                      title="Reject">
                      <i className="bi bi-x-lg"></i>
                    </button>

                  </div>
                </td>

              </tr>

            ))}
          </tbody>

        </table>

        {filteredRegistrations.length === 0 && (
          <p className="text-center text-muted py-3">
            No registrations found.
          </p>
        )}

      </div>
    </div>
  );
}

export default Registrations;
