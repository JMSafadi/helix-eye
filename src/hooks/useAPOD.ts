import { useEffect, useState } from "react"
// import { getAPODJson } from "../api"

export const COMPLETED_STATUS = "COMPLETED"
export const LOADING_STATUS = "LOADING"
export const ERROR_STATUS = "ERROR"

// export const useFetchApodInfo = () => {

//   const [requestStatus, setRequestStatus] = useState(LOADING_STATUS)
//   const [apod, setApod] = useState({
//     date: '',
//     title: '',
//     explanation: '',
//     media_type: '',
//     url: '',
//   })

//   useEffect(() => {
//     setRequestStatus(LOADING_STATUS)
//     getAPODJson()
//       .then(data => {
//         setApod(data)
//         setRequestStatus(COMPLETED_STATUS)
//         console.log(apod);
//       })
//       .catch(err => {
//         setRequestStatus(ERROR_STATUS)
//         console.error("Error in request apod", err)
//       })
//   }, [])

//   return { apod, requestStatus }
// }