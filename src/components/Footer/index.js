import { useRouter } from 'next/router';
import { ContainerFooter } from './styles';
import { Wrapper } from '../../styles/Utils';
import { useEffect, useState } from 'react';
import { GiExplodingPlanet } from 'react-icons/gi';

export default function Footer() {
  const router = useRouter();
  const [showComponent, setShowComponent] = useState(null);
  const { pathname } = router;

  useEffect(() => {
    setShowComponent(pathname !== '/login' && pathname !== '/cadastro');
  }, [pathname]);

  return (
    <ContainerFooter isVisible={showComponent} data-scroll data-scroll-section>
      <Wrapper>
        <div className="content">
          <div className="logo">
            <a href="/">
              <GiExplodingPlanet />
              <span>Travrs</span>
            </a>
          </div>
          <ul>
            <h4>Empresa</h4>

            <li>
              <a href="">Sobre nós</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
            <li>
              <a href="">Lorem ipsum</a>
            </li>
          </ul>
          <ul>
            <h4>Suporte</h4>

            <li>
              <a href="">Ajuda</a>
            </li>
            <li>
              <a href="">Atendimento</a>
            </li>
            <li>
              <a href="">Lorem ipsum</a>
            </li>
            <li>
              <a href="">Lorem ipsum</a>
            </li>
          </ul>
          <ul>
            <h4>Redes sociais</h4>

            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Tik Tok</a>
            </li>
          </ul>
          <ul>
            <h4>Contato</h4>

            <li>
              <a href="">(00) 1234-1234</a>
            </li>
            <li>
              <a href="">email@contato.com</a>
            </li>
            <li>
              <a href="">Via chat</a>
            </li>
          </ul>
        </div>

        <div className="links">
          <p href="">&copy; Todos os direitos reservados 2050</p>
          <a href="">Termos e politica</a>
          <a href="">Lorem ipsum dolor</a>
          <a href="">Lorem ipsum dolor sit amet consectetur</a>
        </div>
      </Wrapper>
    </ContainerFooter>
  );
}
