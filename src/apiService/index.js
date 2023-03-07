import axios from "axios";
//import { Notify } from "quasar";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "../api"
    : //   : "https://";
      "https://localhost:7059";

const defaultOptions = {
  baseURL: baseUrl,
};

let instance = axios.create(defaultOptions);

// we need this for IE, there is an issue with IE 11 caching get api requests
instance.defaults.headers = {
  "Cache-Control": "no-cache",
  Pragma: "no-cache",
  Expires: "0",
  "Access-Control-Allow-Origin": "*",
  "X-RapidAPI-Key": "f2abd86da7mshf1efb901fe89fd5p1ff2b9jsnc728ad1f9d5a",
  "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
};

// we need this for IE, there is an issue with IE 11 caching get api requests
instance.defaults.headers = {
  "Cache-Control": "no-cache",
  Pragma: "no-cache",
  Expires: "0",
  "Access-Control-Allow-Origin": "*",
  "X-RapidAPI-Key": "f2abd86da7mshf1efb901fe89fd5p1ff2b9jsnc728ad1f9d5a",
  "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
};

// instance.interceptors.response.use(
//   function (response) {
//     if (
//       (response.data?.error?.code === -2 ||
//         response.data?.error?.code === -1) &&
//       sessionExpired(response.data?.error?.msg)
//     ) {
//       store.dispatch("logout");
//     } else if (response.data?.error?.msg) {
//       Notify.create({
//         message: response.data?.error?.msg,
//         color: "red",
//         position: "top",
//       });
//     }

//     return response;
//   },
//   function (error) {
//     console.error("!!error!!!!", error);
//     if (sessionExpired(error?.response?.data)) {
//       console.log("redirect to logout");
//       store.dispatch("logout");
//     }
//     if (error.message) {
//       Notify.create({
//         message: error.message,
//         color: "red",
//         position: "top",
//       });
//     }
//     throw error;
//   }
// );

// function sessionExpired(data) {
//   const sessionString = [
//     "expired session",
//     "session expired",
//     "session is ended",
//     "invalid session",
//     "session is unknown",
//   ];

//   if (sessionString.findIndex((t) => t === data?.toLowerCase()) > -1) {
//     return true;
//   } else {
//     return false;
//   }
// }

const Api = {
  getMovieByTitle: (title, limit, sortArg) =>
    instance.get(
      `https://imdb8.p.rapidapi.com/title/v2/find?title=${title}&limit=${limit}&${sortArg}`
    ),
};

export default Api;
