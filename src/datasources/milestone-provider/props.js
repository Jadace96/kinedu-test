import { createStructuredSelector } from "reselect";

import { onSuccessFetchMilestones } from "./actions";
import { makeSelectPropFromMilestoneProvider } from "./selectors";

const BASE_URL = "http://demo.kinedu.com/api/v3/skills/2/milestones";
const TOKEN =
  "Token token=09d23abf0c1d10e37592819dd8157ee06f22c0d308a8906d21e25c0de4f838859e0d5c1337aca40103b028ec81e948c6be382fce7c82d6ad273ad4fcd16e8f58";

const mapStateToProps = createStructuredSelector({
  milestones: makeSelectPropFromMilestoneProvider("milestones")
});

const mapDispatchToProps = dispatch => ({
  dispatch,

  async fetchMilestonesAction() {
    debugger;
    fetch(BASE_URL, {
      headers: new Headers({
        Authorization: TOKEN,
        "Access-Control-Allow-Origin": "*"
      })
    });
    debugger;
    const response = await fetch(BASE_URL);
    debugger;
    // const { ok, status, statusText } = response;
    // if (!ok) {
    //   console.log(`Error ${status}: ${statusText}.`);
    //   return;
    // }

    const data = await response.json();
    debugger;
    dispatch(onSuccessFetchMilestones(data));
  }
});

export { mapStateToProps, mapDispatchToProps };
