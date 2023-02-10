import React from "react";
import { Link } from "react-router-dom";

function CourseList(props) {
  return (
    <>
      <Link to="course" className="btn btn-primary mb-2">
        Add Course
      </Link>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>AuthorId</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {props.courses.map((course) => {
            return (
              <tr key={course.id}>
                <td>
                  <Link to={"/course/" + course.slug}>{course.title}</Link>
                </td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default CourseList;
