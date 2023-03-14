import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';

import { ContainerLogin } from './styles';
import { Wrapper, Button } from '../../styles/Utils';

export default function SignUp() {
  return (
    <ContainerLogin>
      <Wrapper className="content">
        <section>
          <h1>Seja Bem-Vindo!</h1>

          <form action="">
            <input type="email" placeholder="Email" id="" />
            <input type="password" placeholder="Senha" id="" />

            <div>
              <a href="">Não tenho conta</a>
              <span>&#9679;</span>
              <a href="">Esqueci a senha</a>
            </div>

            <Button className="btn-primary" type="submit">
              Entrar
            </Button>
          </form>
        </section>
      </Wrapper>
      <div className="socials">
        <span>Fazer login com:</span>

        <div className="buttons">
          <a href="#">
            <span>
              <FcGoogle />
              Google
            </span>
          </a>
          <a href="#">
            <span>
              <BsFacebook />
              Facebook
            </span>
          </a>
        </div>
      </div>
    </ContainerLogin>
  );
}
