import { useState } from "react";

// Temporary sample students
const students = [
  {
    id: 1,
    name: "Sara Ahmad",
    email: "sara@example.com",
    phone: "70123456",
    course: "Web Development",
    registrationDate: "2026-11-10",
  },
  {
    id: 2,
    name: "Omar Hassan",
    email: "omar@example.com",
    phone: "71123456",
    course: "Graphic Design",
    registrationDate: "2026-11-11",
  },
  {
    id: 3,
    name: "Maya Ali",
    email: "maya@example.com",
    phone: "76123456",
    course: "Data Science",
    registrationDate: "2026-11-12",
  },
];

function Students() {
  // Search state
  const [searchTerm, setSearchTerm] = useState("");

  // Search by name, email, or course
  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.course.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="students-page">
      {/* Page Heading */}
      <div className="page-heading d-flex justify-content-between align-items-center flex-wrap gap-3">
        <div>
          <p className="section-label">MANAGEMENT</p>
          <h1>Student Management</h1>
          <p className="text-muted mb-0">
            View and manage registered students.
          </p>
        </div>

        {/* UI Only */}
        <button type="button" className="btn btn-add-student">
          <i className="bi bi-plus-lg me-2"></i>
          Add Student
        </button>
      </div>

      {/* Search */}
      <div className="mb-4">
        <input
          type="search"
          className="form-control"
          placeholder="Search students..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Students Table */}
      <div className="table-responsive students-table">
        <table className="table table-hover align-middle">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Registered Course</th>
              <th>Registration Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.course}</td>
                <td>{student.registrationDate}</td>

                <td>
                  <div className="d-flex align-items-center gap-2">
                    {/* View Details */}
                    <button
                      type="button"
                      className="btn btn-action btn-view"
                      title="View Student"
                      aria-label={`View ${student.name}`}
                    >
                      <i className="bi bi-eye"></i>
                    </button>

                    {/* Update */}
                    <button
                      type="button"
                      className="btn btn-action btn-edit"
                      title="Edit Student"
                      aria-label={`Edit ${student.name}`}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </button>

                    {/* Delete */}
                    <button
                      type="button"
                      className="btn btn-action btn-delete"
                      title="Delete Student"
                      aria-label={`Delete ${student.name}`}
                    >
                      <i className="bi bi-trash3"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredStudents.length === 0 && (
          <p className="text-center text-muted py-3">No students found.</p>
        )}
      </div>
    </div>
  );
}

export default Students;
