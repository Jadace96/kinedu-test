import React from "react";
import { Helmet } from "react-helmet";

function MilestonesPage({ milestones, fetchMilestonesAction }) {
  if (!milestones) {
    debugger
    fetchMilestonesAction();
  }
console.log(milestones)
  return (
    <div>
      <Helmet>
        <title>Kinedu - Milestones</title>
      </Helmet>
      <h1>Milestones page</h1>
    </div>
  );
}

export default MilestonesPage;
