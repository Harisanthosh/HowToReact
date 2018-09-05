import axios from "axios";
export default function FetchUserDetails(url) {
  //tbd
  return function(dispatch) {
    dispatch({ type: "FETCHING" });
    axios
      .get(url)
      .then(response => {
        dispatch({ type: "FETCH_SUCCESS", userDetails: response.data });
        console.log(response.data);
      })
      .catch(err => {
        dispatch({ type: "FETCH_ERROR", error: err });
        console.log(err);
      });
  };
}
