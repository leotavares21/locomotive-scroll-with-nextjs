import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';

import { ContainerSignUp } from './styles';
import { Wrapper, Button } from '../../styles/Utils';

export default function SignUp() {
  return (
    <ContainerSignUp>
      <Wrapper className="content">
        <section>
          <h1>Cadastre-se</h1>
          <p>
            <strong>Lorem ipsum dolor sit amet</strong>
            Lorem ipsum dolor sit amet consectetur
          </p>

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

          <form action="">
            <input type="text" placeholder="Seu nome"  id="" />
            <input type="email" placeholder="Email"  id="" />
            <input type="password" placeholder="Senha"  id="" />
            <input type="password" placeholder="Repita a senha" id="" />
            <Button className="btn-primary" type="submit">Cadastrar</Button>
          </form>
        </section>
      </Wrapper>
    </ContainerSignUp>
  );
}
