import React from "react";

const ManageCourse = (props) => {
  return (
    <>
      <h2>Manage Courses Page</h2>
      {props.match.params.slug}
      {console.log(props)}
    </>
  );
};

export default ManageCourse;
