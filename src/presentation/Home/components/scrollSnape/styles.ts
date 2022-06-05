import styled from 'styled-components';

export const PrincipalSection = styled.section`
  scroll-snap-type: y mandatory;
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  .section {
    scroll-snap-align: center;
    height: 100vh;
    color: white;
    font-size: 30px;
    font-weight: bold;
    padding: 40px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .section-1 {
    background: #3182ce;
  }

  .section-2 {
    background: #805ad5;
  }

  .section-3 {
    background: #38a169;
  }
  .section-4 {
    background: #63b3ed;
  }

  .section-5 {
    background: #ed8936;
  }
`;

export const ContainerX = styled.section`
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  scroll-padding-left: 20px;
`;
