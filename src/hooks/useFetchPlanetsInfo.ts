import { useEffect, useState } from "react"
import { getPlanetsJSON } from "../api"

export const COMPLETED_STATUS = "COMPLETED"
export const LOADING_STATUS = "LOADING"
export const ERROR_STATUS = "ERROR"

export const useFetchPlanetsInfo = () => {

  const [requestStatus, setRequestStatus] = useState(LOADING_STATUS)
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    setRequestStatus(LOADING_STATUS)
    getPlanetsJSON()
      .then(data => {
        setPlanets(data)
        setRequestStatus(COMPLETED_STATUS)
      })
      .catch(err => {
        setRequestStatus(ERROR_STATUS)
        console.error("Error in request planets", err)
      })
  }, [])

  return { planets, requestStatus }
}