import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import useCollapse from 'react-collapsed';
import Link from 'next/link';
import { Container, Dropdown, Toggle } from './styles';
import { Wrapper, Button } from '../../styles/Utils';

import { GiExplodingPlanet } from 'react-icons/gi';

function Collapsible(props) {
  const config = {
    isExpanded: props.isExpanded || false,
  };
  const { getCollapseProps } = useCollapse(config);

  return <Dropdown {...getCollapseProps()}>{props.children}</Dropdown>;
}

export default function Header() {
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    setDropnumber(null);
  }, [pathname]);

  const [dropnumber, setDropnumber] = useState();

  function toggleCollapsible(number) {
    if (dropnumber === number) {
      setDropnumber();
    } else {
      setDropnumber(number);
    }
  }

  return (
    <Container>
      <Wrapper className="wrapper-header">
        <h3>
          <Link href="/">
            <span>
              <GiExplodingPlanet />
              Travrs
            </span>
          </Link>
        </h3>
        <nav>
          <ul>
            <Toggle
              onClick={() => toggleCollapsible(1)}
              isActive={dropnumber === 1}
            >
              Modalidades <MdKeyboardArrowDown className="icon" />
            </Toggle>

            <Toggle>
              <Link href="/FAQ">Perguntas frequentes</Link>
            </Toggle>

            <Toggle>
              <Link href="/cadastro">
                <Button className="btn-primary">Cadastre-se</Button>
              </Link>
            </Toggle>

            <Toggle>
              <Link href="/login">
                <span>
                  Login <FaRegUser />
                </span>
              </Link>
            </Toggle>
          </ul>
        </nav>
      </Wrapper>

      <Collapsible isExpanded={dropnumber === 1}>
        <Wrapper className="nav-list">
          <ul>
            <h3>Nacional</h3>
            <li>
              <Link href="/modalidades">Sul</Link>
            </li>
            <li>
              <Link href="/modalidades">Norte</Link>
            </li>
            <li>
              <Link href="/modalidades">Sudeste</Link>
            </li>
            <li>
              <Link href="/modalidades">Nordeste</Link>
            </li>
            <li>
              <Link href="/modalidades">Centro-Oeste</Link>
            </li>
          </ul>
          <ul>
            <h3>Americas</h3>
            <li>
              <Link href="/modalidades">Sul</Link>
            </li>
            <li>
              <Link href="/modalidades">Norte</Link>
            </li>
            <li>
              <Link href="/modalidades">Sudeste</Link>
            </li>
            <li>
              <Link href="/modalidades">Nordeste</Link>
            </li>
            <li>
              <Link href="/modalidades">Centro-Oeste</Link>
            </li>
          </ul>
          <ul>
            <h3>Europa</h3>
            <li>
              <Link href="/modalidades">Sul</Link>
            </li>
            <li>
              <Link href="/modalidades">Norte</Link>
            </li>
            <li>
              <Link href="/modalidades">Sudeste</Link>
            </li>
            <li>
              <Link href="/modalidades">Nordeste</Link>
            </li>
            <li>
              <Link href="/modalidades">Centro-Oeste</Link>
            </li>
          </ul>
          <ul>
            <h3>Ásia</h3>
            <li>
              <Link href="/modalidades">Sul</Link>
            </li>
            <li>
              <Link href="/modalidades">Norte</Link>
            </li>
            <li>
              <Link href="/modalidades">Sudeste</Link>
            </li>
            <li>
              <Link href="/modalidades">Nordeste</Link>
            </li>
            <li>
              <Link href="/modalidades">Centro-Oeste</Link>
            </li>
          </ul>
          <ul>
            <h3>África</h3>
            <li>
              <Link href="/modalidades">Sul</Link>
            </li>
            <li>
              <Link href="/modalidades">Norte</Link>
            </li>
            <li>
              <Link href="/modalidades">Sudeste</Link>
            </li>
            <li>
              <Link href="/modalidades">Nordeste</Link>
            </li>
            <li>
              <Link href="/modalidades">Centro-Oeste</Link>
            </li>
          </ul>
          <ul>
            <h3>Explorar</h3>
            <li>
              <Link href="/modalidades">Sul</Link>
            </li>
            <li>
              <Link href="/modalidades">Norte</Link>
            </li>
            <li>
              <Link href="/modalidades">Sudeste</Link>
            </li>
            <li>
              <Link href="/modalidades">Nordeste</Link>
            </li>
            <li>
              <Link href="/modalidades">Centro-Oeste</Link>
            </li>
          </ul>
        </Wrapper>
      </Collapsible>
    </Container>
  );
}
