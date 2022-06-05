import styled from 'styled-components';

export const PrincipalContainer = styled.div`
  max-width: 600px;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  scroll-padding-left: 40px;
  display: grid;
  width: 100%;
  grid-auto-flow: column;
  gap: 16px;
  padding-left: 20px;
  margin: 0 auto;

  .carrossel-snap {
    scroll-snap-align: start;
    width: 100px;
    height: 100px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .carrossel-snap:nth-child(1) {
    background: #3182ce;
  }
  .carrossel-snap:nth-child(2) {
    background: #805ad5;
  }
  .carrossel-snap:nth-child(3) {
    background: #38a169;
  }
  .carrossel-snap:nth-child(4) {
    background: #3182ce;
  }
  .carrossel-snap:nth-child(5) {
    background: #ed8936;
  }
  .carrossel-snap:nth-child(6) {
    background: #3182ce;
  }
  .carrossel-snap:nth-child(7) {
    background: aquamarine;
  }
`;
