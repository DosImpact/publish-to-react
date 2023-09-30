import React, { useState } from "react";
import { useParams } from "react-router-dom";

const StudyDetailPage = () => {
  const { id } = useParams();

  return <div>StudyDetailPage id :{id} Components</div>;
};

export default StudyDetailPage;
