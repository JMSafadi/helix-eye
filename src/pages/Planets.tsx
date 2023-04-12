import styled from 'styled-components';
import { GalaxiesLayout } from '../components/GalaxiesLayout';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { LOADING_STATUS, ERROR_STATUS, useFetchPlanetsInfo } from '../hooks/useFetchPlanetsInfo';

const PlanetsPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 3rem;
  width: calc(100% - 6rem);
`

export const Planets = () => {

  const { planets, requestStatus } = useFetchPlanetsInfo()

  const renderLayout = () => {
    if (requestStatus === LOADING_STATUS) return <LoadingSpinner />
    if (requestStatus === ERROR_STATUS) return <h1>Error</h1>
    return <GalaxiesLayout galaxies={planets} />
  }

  return (
    <PlanetsPageWrapper>
      <h1>Planets</h1>
      {renderLayout()}
    </PlanetsPageWrapper>
  );
}