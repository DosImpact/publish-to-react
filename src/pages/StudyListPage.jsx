import React, { useState } from "react";
import { Link } from "react-router-dom";

const StudyListPage = () => {
  return (
    <div>
      StudyListPage Components
      <Link to="/study-list/1">
        <div>study num 1</div>
      </Link>
      <Link to="/study-list/2">
        <div>study num 2</div>
      </Link>
    </div>
  );
};

export default StudyListPage;
