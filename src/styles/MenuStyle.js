import styled from "styled-components";

export const SettingsContainer = styled.div`
  display: flex;
  top: 0;
  width: 100%;
  color: #ffffff;
  font-size: 0.875rem;
  position: absolute;
  font-family: monospace;
  font-weight: normal;
  z-index: 2;

  .logo-menu-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 4rem;
  }

  .logo-menu {
    width: 8rem;
    transition: 0.4s ease-in-out;

    &:hover {
      width: 9rem;
      transition: 0.4s ease-in-out;
    }
  }

  .settings {
    background: rgba(0, 0, 0, 0.3);
    padding: 0.5rem;
    border-radius: 0 1rem 1rem 0;
  }

  input,
  textarea {
    border: 0;
    border-bottom: 1px solid #ffffff;
    margin-bottom: 1rem;
    margin-left: 3rem;
    background: rgba(0, 0, 0, 0);
    padding: 0.2rem;
    color: #ffffff;
    font-family: monospace;
    font-weight: normal;
    transition: 1s ease-in-out;
  }

  span {
    width: 135px;
    display: inline-block;
    vertical-align: top;
  }

  .botton-download {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;

    p {
      margin-bottom: 1rem;
    }

    a {
      background: #ffffff;
      border: 0;
      border-radius: 7px;
      padding: 0.8rem;
      padding-left: 5rem;
      padding-right: 5rem;
      color: #ffffff;
      text-decoration: none;
      transition: 0.5s ease-in-out;
      background: #28303d;

      &:hover {
        filter: brightness(0.9);
        color: #ffffff;
        padding-left: 5.5rem;
        padding-right: 5.5rem;
        transition: 0.5s ease-in-out;
      }
    }

    p {
      margin-top: 1rem;
    }
  }
`;
