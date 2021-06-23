import styled from 'styled-components';
import convertPxToVw from '~/utils/convertPxToVw';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${convertPxToVw(32)};
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const ContainerTable = styled.div`
  width: 100%;
  max-width: 750px;
  margin: 50px auto;
`;

export const Content = styled.div`
  display: flex;
  width: ${convertPxToVw(320, 320)};
  flex-direction: column;
  padding: ${convertPxToVw(20)};
  margin: ${convertPxToVw(20)};
  height: 100%;
  align-items: center;

  @media (min-width: 768px) {
    width: ${convertPxToVw(320, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${convertPxToVw(500)};
    height: 100%;
  }

  h1 {
    color: #fff;
    margin-bottom: 30px;
    font-size: 1.8rem;
  }

  strong {
    color: #fff;
    margin-bottom: 16px;
    font-weight: bold;
    font-size: 1.2rem;
  }

  span {
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
  }
`;
