import styled from 'styled-components'

export const ApodCardContainer = styled.div`

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 8px;
  background: linear-gradient(270deg, rgb(38, 70, 166), rgb(12, 135, 242));
  color: white;
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  text-align: center;

  & > .title {
    text-align: center;
    margin-top: 0;
  }

  & > .image {
    width: 100%;
    height: 240px;
    object-fit: cover;
  }

  & > .info-container .explanation {
      display: block;
      font-size: 1rem;
      line-height: 1.8rem;
  }

`