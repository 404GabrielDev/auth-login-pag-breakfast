import "./login.css";

import {
    background
  } from "../../assets/Javascript/images";

const Pagelogin = () => {
  return (
    <>
      <section
        className="container-login"
        style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
        >
        <section className="card-form">
          <div>
            <h1>WELCOME</h1>
          </div>

          <form className="container-forms">
            <p>Cadastrar/Entrar</p>

            <div className="containerInputs">
              <div className="container-inputEmail">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  placeholder="username@email.com"
                  id="email"
                  required
                />
              </div>

              <div className="container-inputPassword">
                <label htmlFor="password">Senha:</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Digite sua senha"
                  required
                />
              </div>
            </div>

            <button type="submit">Enviar</button>
          </form>
        </section>
      </section>
    </>
  );
};

export default Pagelogin;
