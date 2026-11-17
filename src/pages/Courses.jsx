
import { useState } from "react";

// Sample Courses
const courses = [
  {
    id: 1,
    name: "Web Development",
    category: "Programming",
    level: "Beginner",
    duration: "8 Weeks",
    status: "Active",
    price: 120
  },
  {
    id: 2,
    name: "Graphic Design",
    category: "Design",
    level: "Intermediate",
    duration: "6 Weeks",
    status: "Active",
    price: 100
  },
  {
    id: 3,
    name: "Data Science",
    category: "Technology",
    level: "Advanced",
    duration: "12 Weeks",
    status: "Draft",
    price: 180
  },
  {
    id: 4,
    name: "UI/UX Design",
    category: "Design",
    level: "Beginner",
    duration: "5 Weeks",
    status: "Active",
    price: 90
  }
];

function Courses() {
  const [searchTerm, setSearchTerm] = useState("");

  // Search by course name
  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="courses-page">

      {/* Page Heading */}
      <div className="page-heading">
        <p className="section-label">MANAGEMENT</p>
        <h1>Course Management</h1>
        <p className="text-muted">
          Manage all courses at Improve AC.
        </p>
      </div>

      {/* Search */}
      <div className="mb-4">
        <input
          type="search"
          className="form-control"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Courses Table */}
      <div className="table-responsive">
        <table className="table table-hover align-middle">

          <thead>
            <tr>
              <th>Course Name</th>
              <th>Category</th>
              <th>Level</th>
              <th>Duration</th>
              <th>Status</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {filteredCourses.map((course) => (
              <tr key={course.id}>

                <td>{course.name}</td>
                <td>{course.category}</td>
                <td>{course.level}</td>
                <td>{course.duration}</td>

                <td>
                  <span
                    className={
                      course.status === "Active"
                        ? "badge bg-success"
                        : "badge bg-secondary"
                    }
                  >
                    {course.status}
                  </span>
                </td>

                <td>${course.price}</td>

              </tr>
            ))}
          </tbody>

        </table>

        {/* No Search Results */}
        {filteredCourses.length === 0 && (
          <p className="text-center text-muted py-3">
            No courses found.
          </p>
        )}

      </div>

    </div>
  );
}

export default Courses;
