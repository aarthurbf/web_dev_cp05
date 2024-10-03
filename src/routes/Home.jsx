import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { HomeStyle } from "../css/HomeStyle";
import { FaMoneyBill, FaBox, FaBuilding } from "react-icons/fa";
import Estrela from "../assets/img/estrela-icon.png";
import FaceOne from "../assets/img/face1.jpg";
import FaceTwo from "../assets/img/face2.jpg";
import FaceThree from "../assets/img/face3.jpg";
import ProdutoImg from "../assets/img/produto.png";

const Home = () => {
  const [produtos, setProdutos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/src/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        const updatedData = data.map((produto) => ({
          ...produto,
          imagem: ProdutoImg
        }));
        setProdutos(updatedData);
      })
      .catch((error) => console.error("Erro ao carregar os produtos:", error));
  }, []);

  const filteredProducts = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <HomeStyle>
      {/* BANNER */}
      <section className="banner" id="inicio">
        <h2>Venha conhecer os nossos produtos</h2>
        <h3>Saúde e Sabor em Cada Mordida</h3>
        <a href="" className="btn">Conheça agora</a>
      </section>

      {/* SERVIÇOS */}
      <section className="informacoes">
        <h3>Vantagens</h3>
        <p>
          Comprar com a GourmetOn oferece refeições saudáveis e deliciosas,
          feitas com ingredientes frescos e de alta qualidade. Você economiza
          tempo na cozinha e garante uma alimentação equilibrada, mantendo uma
          vida saudável e ativa. Tudo isso sem abrir mão do sabor!
        </p>
        <hr />
        <ul className="item">
          <li>
            <span className="icon-home">
              <FaMoneyBill />
            </span>
            <h4>Pagamento</h4>
            <p>
              Oferecemos várias opções de pagamento, incluindo cartões
              de crédito, débito, Pix e carteiras digitais, garantindo uma
              experiência de compra segura e fácil.
            </p>
          </li>
          <li>
            <span className="icon-home">
              <FaBox />
            </span>
            <h4>Entrega</h4>
            <p>
              As nossas refeições saudáveis são entregues rapidamente por
              parceiros logísticos confiáveis, garantindo frescor e
              pontualidade.
            </p>
          </li>
          <li>
            <span className="icon-home">
              <FaBuilding />
            </span>
            <h4>Variedade</h4>
            <p>
              Possuímos uma ampla variedade de restaurantes parceiros
              especializados em culinária saudável, oferecendo opções
              vegetarianas, veganas e ricas em proteínas.
            </p>
          </li>
        </ul>
      </section>

      {/* PRODUTOS */}
      <section>
        <h1 className="produtos-title" id="produtos">Produtos</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="produto-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((produto) => (
              <div key={produto.id} className="produto-item">
                <img src={produto.imagem} alt={produto.nome} />
                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>
                <a href="#" className="btn">Comprar</a>
                <p className="preco">{produto.preco}</p>
              </div>
            ))
          ) : (
            <p>Nenhum produto encontrado</p>
          )}
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section className="testimonials">
        <div className="inner">
          <h1>Avaliações</h1>
          <div className="row">
            {[
              {
                img: FaceOne,
                name: "Maria",
                testimonial:
                  "“As marmitas da GourmetON são incríveis! A variedade de opções saudáveis me permite manter uma dieta equilibrada sem abrir mão do sabor. Recomendo para todos que buscam praticidade e saúde no dia a dia.”",
              },
              {
                img: FaceTwo,
                name: "Rodrigo",
                testimonial:
                  "“Minha rotina é super corrida e as marmitas da GourmetON salvaram meu tempo! Agora posso ter refeições saudáveis e saborosas prontas em minutos. A entrega é rápida e o atendimento é excelente.”",
              },
              {
                img: FaceThree,
                name: "Pedro",
                testimonial:
                  "“Como atleta, preciso de refeições que me forneçam energia e nutrientes essenciais. As marmitas da GourmetON são perfeitas para isso. Além de deliciosas, são preparadas com ingredientes frescos e de alta qualidade.”",
              },
            ].map((testimonial, index) => (
              <div className="col" key={index}>
                <div className="testimonial">
                  <img src={testimonial.img} alt={testimonial.name} />
                  <div className="name">{testimonial.name}</div>
                  <div className="stars">
                    {Array(5)
                      .fill()
                      .map((_, starIndex) => (
                        <img key={starIndex} src={Estrela} alt="Estrela" />
                      ))}
                  </div>
                  <p>{testimonial.testimonial}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section>
        <div className="selection-form" id="contato">
          <form className="form">
            <h2>Contate-nos</h2>
            <p type="Nome">
              <input placeholder="Escreva seu nome" />
            </p>
            <p type="Email">
              <input placeholder="Informe seu email" />
            </p>
            <p type="Mensagem">
              <input placeholder="Escreva sua mensagem" />
            </p>
            <button type="submit">Enviar mensagem</button>
          </form>
        </div>
      </section>
    </HomeStyle>
  );
};

export default Home;
