import styled from "styled-components";

export const ErrorStyle = styled.section`
  * {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: Arial, sans-serif;
  }

  .error-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .error-page h1 {
    font-size: 5rem;
  }

  .btn {
    color: var(--color7);
    padding: 0.7em 1.7em;
    font-size: 1rem;
    border-radius: 0.5em;
    background: var(--color1);
    cursor: pointer;
    border: 1px solid var(--color1);
    transition: all 0.3s;
    box-shadow: 6px 6px 12px var(--color6), -6px -6px 12px var(--color7);
  }
`;
