import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  .wallpaper-background {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 1s ease-in-out;
    width: 100%;
    height: 100%;
    background: #28303d;
    position: absolute;

    .logo {
      width: 20rem;
      transition: 1s ease-in-out;
    }

    h1 {
      font-size: 3rem;
      color: #ffffff;
      font-weight: normal;
      transition: 0.5s ease-in-out;
    }
  }
`;
