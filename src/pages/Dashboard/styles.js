import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 750px;
  margin: 50px auto;
`;

export const Content = styled.div`
  max-width: 750px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  aside {
    display: flex;
    align-items: center;
  }
`;
