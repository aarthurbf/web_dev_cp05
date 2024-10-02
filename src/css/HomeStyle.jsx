import styled from "styled-components";
import Banner from "../assets/img/banner.jpg";

export const HomeStyle = styled.section`
  /* Banner */
  .banner {
    background: url(${Banner});
    background-size: cover;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }

  .banner h2 {
    margin: 1.25rem 0;
    font-size: 3rem;
    color: var(--color2);
  }

  .banner h3 {
    font-size: 1.5rem;
    color: var(--color3);
  }

  .banner .btn {
    margin-top: 1.25rem;
    background: var(--color2);
    border: 1px solid var(--color4);
    border-radius: 0.25rem;
    color: var(--color7);
    padding: 1.25rem 3.12rem;
    text-align: center;
    font-weight: 900;
    transition: 0.5s;
    font-size: 0.9rem;
  }

  .banner .btn:hover {
    background: transparent;
    color: var(--color2);
  }

  /* Vantagens */
  .informacoes {
    background: var(--color3);
    color: var(--color6);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6.25rem 3.12rem;
    text-align: center;
  }

  .informacoes h3 {
    font-size: 2rem;
    margin-bottom: 2.1rem;
  }

  .informacoes p {
    max-width: 50rem;
    margin-bottom: 2.1rem;
    font-size: 1.2rem;
    text-align: center;
  }

  .informacoes hr {
    width: 16rem;
    height: 2px;
    background: var(--color4);
    margin-bottom: 4.3rem;
    border: none;
  }

  .informacoes .item {
    width: 100%;
    display: flex;
  }

  .informacoes .item li {
    padding: 0 1.8rem;
    text-align: center;
  }

  .informacoes .item li h4 {
    color: var(--color6);
    font-size: 1.5rem;
    margin-bottom: 1.8rem;
  }

  .informacoes .item li p {
    font-size: 1.2rem;
    margin-bottom: 1.8rem;
  }

  .icon-home {
    font-size: 2rem;
    color: var(--color7);
  }

  /* Produtos */
  .produtos-title{
    margin-top: 2rem;
    margin-bottom: 0;
    text-align: center;
    font-size: 2rem;
    color: var(--color1)
  }

  .btn {
    background-color: var(--color2);
    padding: 8px 0.9rem;
    border-radius: 5px;
    color: var(--color7);
    transition: var(--transition);
  }

  .btn:hover {
    background: transparent;
    border: 2px solid var(--color3);
    color: var(--color2);
  }

  .search-bar {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    margin-top: 3rem;
  }

  .search-bar input {
    width: 50%;
    padding: 0.8rem;
    font-size: 1rem;
    border: 2px solid var(--color3);
    border-radius: 5px;
    outline: none;
    transition: var(--transition);
  }

  .search-bar input:focus {
    border-color: var(--color2);
    box-shadow: 0px 0px 10px var(--color2);
  }

  .produto-title {
    font-size: 2rem;
    text-align: center;
    margin: 2.5rem 0 1rem;
    color: var(--color2);
  }

  .produto-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    grid-gap: 20px;
    padding: 0 1rem;
  }

  .produto-item {
    background-color: var(--color7);
    width: 20rem;
    margin: 3rem auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    box-shadow: 1px 1px 30px darkgray;
    border-radius: 10px;
    transition: 0.5s;
  }

  .produto-item:hover {
    transform: scale(1.1);
  }

  .produto-item img {
    width: 100%;
    border-radius: 5px;
  }

  .produto-item h3 {
    margin: 2rem 0;
    font-weight: 800;
  }

  .produto-item p {
    margin: 0 0 1.5rem;
    width: 80%;
  }

  .preco {
    padding-top: 30px;
    font-size: 1.1rem;
  }

  .vejaMais {
    display: flex;
    justify-content: center;
  }

  .produto-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 20px auto;
    padding: 20px;
    max-width: 500px;
    background-color: var(--color7);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    text-align: center;
  }

  .produto-form input,
  .produto-form textarea {
    padding: 12px;
    border: 2px solid var(--color3);
    border-radius: 5px;
    font-size: 1rem;
    width: 100%;
    box-sizing: border-box;
  }

  .produto-form textarea {
    resize: none;
    height: 100px;
  }

  .produto-form button {
    padding: 12px 20px;
    background-color: var(--color2);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }

  .produto-form button:hover {
    background-color: var(--color3);
  }

  /* Responsividade */
  @media screen and (max-width: 1024px) {
    .produto-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 768px) {
    .produto-list {
      grid-template-columns: repeat(1, 1fr);
    }

    .produto-item {
      width: 25rem;
    }

    .produto-form {
      max-width: 100%;
      padding: 15px;
    }
  }

  @media screen and (max-width: 480px) {
    .produto-list {
      grid-template-columns: repeat(1, 1fr);
    }

    .produto-item {
      width: 100%;
      margin: 3rem auto;
      padding: 1.5rem;
    }
  }

  /* AVALIAÇÕES */
  .testimonials {
    padding: 2.5rem 0;
    background: var(--color3);
    color: var(--color2);
    text-align: center;
    margin-top: 1rem;
  }

  .inner {
    max-width: 75rem;
    margin: auto;
    overflow: hidden;
    padding: 0 1.25rem;
  }

  .inner h1 {
    font-size: 2rem;
    color: var(--color7);
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .col {
    flex: 33.33%;
    max-width: 33.33%;
    box-sizing: border-box;
    padding: 1rem;
  }

  .testimonial {
    background: var(--color7);
    border-radius: 2rem;
    padding: 1.8rem;
    margin-bottom: 1rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  .testimonial img {
    width: 6.25rem;
    height: 6.25rem;
    border-radius: 50%;
  }

  .name {
    font-size: 1.25rem;
    text-transform: uppercase;
    margin: 1.25rem 0;
  }

  .stars {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .stars img {
    width: 1.8rem;
    height: 1.8rem;
  }

  // Responsividade
  @media (max-width: 1024px) {
    .slideshow-container {
      height: 80vh;
    }

    .produto-list {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (max-width: 768px) {
    .slideshow-container {
      height: 70vh;
    }

    .prev,
    .next {
      font-size: 1.5rem;
      padding: 0.4rem;
    }

    .produto-list {
      grid-template-columns: repeat(1, 1fr);
    }

    .produto-item {
      width: 25rem;
    }

    .banner h2 {
      font-size: 2rem;
    }

    .banner h3 {
      font-size: 1rem;
    }

    .banner .btn {
      padding: 0.5rem 1rem;
    }

    .informacoes {
      padding: 3rem 1rem;
    }

    .informacoes .item {
      flex-direction: column;
      align-items: center;
    }

    .informacoes .item li {
      margin-bottom: 2rem;
    }

    .informacoes hr {
      width: 100%;
    }

    .col {
      flex: 100%;
      max-width: 100%;
    }
  }

  @media (max-width: 600px) {
    .col {
      flex: 100%;
      max-width: 100%;
    }
  }

  @media (max-width: 480px) {
    .slideshow-container {
      height: 60vh;
    }

    .prev,
    .next {
      font-size: 1.2rem;
      padding: 0.3rem;
    }

    .produto-list {
      grid-template-columns: repeat(1, 1fr);
    }

    .produto-item {
      width: 100%;
      margin: 3rem auto;
      padding: 1.5rem;
    }

    .banner h2 {
      font-size: 1.5rem;
    }

    .banner h3 {
      font-size: 0.875rem;
    }

    .banner .btn {
      font-size: 0.875rem;
      padding: 0.5rem 1rem;
    }

    .informacoes h3 {
      font-size: 1.5rem;
    }

    .informacoes p {
      font-size: 1rem;
    }

    .informacoes .item {
      flex-direction: column;
    }
  }

  @media (max-width: 320px) {
    .slideshow-container {
      height: 50vh;
    }
  }

  /* FORMULARIO */
  .selection-form {
    display: flex;
    justify-content: center;
    padding: 2rem 0;
  }

  .form {
    width: 100%;
    max-width: 500px;
    background: var(--color7);
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
  }

  .form h2 {
    margin-bottom: 1.5rem;
    color: var(--color3);
    border-bottom: 2px solid var(--color2);
    padding-bottom: 0.5rem;
  }

  .form input {
    width: 100%;
    padding: 0.75rem;
    margin-top: 1rem;
    background: none;
    border: 2px solid var(--color6);
    border-radius: 0.5rem;
    font-size: 1rem;
    color: var(--color1);
    outline: none;
    transition: border 0.3s;
  }

  .form input:focus {
    border-color: var(--color4);
  }

  .form button {
    width: 100%;
    padding: 0.75rem;
    margin-top: 1.5rem;
    background: var(--color2);
    border: none;
    color: var(--color7);
    font-size: 1rem;
    cursor: pointer;
    border-radius: 0.5rem;
    transition: background 0.3s;
  }

  .form button:hover {
    background: var(--color3);
  }
`;
