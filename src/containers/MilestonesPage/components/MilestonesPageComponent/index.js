import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

function AreasPage({ skills, fetchSkillByIdAction }) {
  useEffect(() => {
    if (!skills) {
      fetchSkillByIdAction();
    }
  }, []);

  return (
    <div>
      <Helmet>
        <title>Kinedu - Areas</title>
      </Helmet>
      <h1>Area page</h1>
    </div>
  );
}

export default AreasPage;
