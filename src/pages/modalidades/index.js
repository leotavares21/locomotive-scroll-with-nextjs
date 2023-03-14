import Link from 'next/link';
import { useState } from 'react';
import useCollapse from 'react-collapsed';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Wrapper } from '../../styles/Utils';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import { Container, Toggle, LinkItem } from './styles';

function Collapsible(props) {
  const config = {
    isExpanded: props.isExpanded || false,
  };
  const { getCollapseProps } = useCollapse(config);

  return <div {...getCollapseProps()}>{props.children}</div>;
}

export default function Modalities() {
  const [dropNumber, setDropNumber] = useState();
  const [elClass, setElClass] = useState('');
  const { scroll } = useLocomotiveScroll();

  function handleScroll(e, elName) {
    e.preventDefault();

    if (elClass === elName) {
      setElClass();
    } else {
      setElClass(elName);
    }

    const el = document.getElementById(elName);
    scroll.scrollTo(el);
  }

  function toggleCollapsible(number) {
    if (dropNumber === number) {
      setDropNumber();
    } else {
      setDropNumber(number);
    }
  }

  return (
    <Container data-scroll-section id="target">
      <Wrapper>
        <h1>Modalidades</h1>

        <div className="container-wrapper">
          <aside data-scroll data-scroll-sticky data-scroll-target="#target">
            <ul>
              <Toggle
                onClick={() => toggleCollapsible(1)}
                isActive={dropNumber === 1}
              >
                <h3>Nacional</h3>
                <MdKeyboardArrowDown className="icon" />
              </Toggle>

              <Collapsible isExpanded={dropNumber === 1} isClicked={elClass}>
                <LinkItem
                  onClick={e => handleScroll(e, 'sul')}
                  isClicked={elClass === 'sul'}
                >
                  Sul
                </LinkItem>
                <LinkItem
                  onClick={e => handleScroll(e, 'norte')}
                  isClicked={elClass === 'norte'}
                >
                  Norte
                </LinkItem>
                <LinkItem
                  onClick={e => handleScroll(e, 'sudeste')}
                  isClicked={elClass === 'sudeste'}
                >
                  Sudeste
                </LinkItem>
                <LinkItem
                  onClick={e => handleScroll(e, 'nordeste')}
                  isClicked={elClass === 'nordeste'}
                >
                  Nordeste
                </LinkItem>
                <LinkItem
                  onClick={e => handleScroll(e, 'centro-oeste')}
                  isClicked={elClass === 'centro-oeste'}
                >
                  Centro-oeste
                </LinkItem>
              </Collapsible>
            </ul>
            <ul>
              <Toggle
                onClick={() => toggleCollapsible(2)}
                isActive={dropNumber === 2}
              >
                <h3>Americas</h3>
                <MdKeyboardArrowDown className="icon" />
              </Toggle>

              <Collapsible isExpanded={dropNumber === 2}>
                <LinkItem
                  onClick={e => handleScroll(e, 'sul')}
                  isClicked={elClass === 'sul'}
                >
                  Sul
                </LinkItem>
                <LinkItem
                  onClick={e => handleScroll(e, 'norte')}
                  isClicked={elClass === 'norte'}
                >
                  Norte
                </LinkItem>
                <LinkItem
                  onClick={e => handleScroll(e, 'sudeste')}
                  isClicked={elClass === 'sudeste'}
                >
                  Sudeste
                </LinkItem>
                <LinkItem
                  onClick={e => handleScroll(e, 'nordeste')}
                  isClicked={elClass === 'nordeste'}
                >
                  Nordeste
                </LinkItem>
                <LinkItem
                  onClick={e => handleScroll(e, 'centro-oeste')}
                  isClicked={elClass === 'centro-oeste'}
                >
                  Centro-oeste
                </LinkItem>
              </Collapsible>
            </ul>
            <ul>
              <Toggle
                onClick={() => toggleCollapsible(3)}
                isActive={dropNumber === 3}
              >
                <h3>Europa</h3>
                <MdKeyboardArrowDown className="icon" />
              </Toggle>

              <Collapsible isExpanded={dropNumber === 3}>
                <LinkItem
                  onClick={e => handleScroll(e, 'sul')}
                  isClicked={elClass === 'sul'}
                >
                  Sul
                </LinkItem>
                <LinkItem
                  onClick={e => handleScroll(e, 'norte')}
                  isClicked={elClass === 'norte'}
                >
                  Norte
                </LinkItem>
                <LinkItem
                  onClick={e => handleScroll(e, 'sudeste')}
                  isClicked={elClass === 'sudeste'}
                >
                  Sudeste
                </LinkItem>
                <LinkItem
                  onClick={e => handleScroll(e, 'nordeste')}
                  isClicked={elClass === 'nordeste'}
                >
                  Nordeste
                </LinkItem>
                <LinkItem
                  onClick={e => handleScroll(e, 'centro-oeste')}
                  isClicked={elClass === 'centro-oeste'}
                >
                  Centro-oeste
                </LinkItem>
              </Collapsible>
            </ul>
            <ul>
              <Toggle
                onClick={() => toggleCollapsible(4)}
                isActive={dropNumber === 4}
              >
                <h3>Asia</h3>
                <MdKeyboardArrowDown className="icon" />
              </Toggle>

              <Collapsible isExpanded={dropNumber === 4}>
                <LinkItem
                  onClick={e => handleScroll(e, 'sul')}
                  isClicked={elClass === 'sul'}
                >
                  Sul
                </LinkItem>
                <LinkItem
                  onClick={e => handleScroll(e, 'norte')}
                  isClicked={elClass === 'norte'}
                >
                  Norte
                </LinkItem>
                <LinkItem
                  onClick={e => handleScroll(e, 'sudeste')}
                  isClicked={elClass === 'sudeste'}
                >
                  Sudeste
                </LinkItem>
                <LinkItem
                  onClick={e => handleScroll(e, 'nordeste')}
                  isClicked={elClass === 'nordeste'}
                >
                  Nordeste
                </LinkItem>
                <LinkItem
                  onClick={e => handleScroll(e, 'centro-oeste')}
                  isClicked={elClass === 'centro-oeste'}
                >
                  Centro-oeste
                </LinkItem>
              </Collapsible>
            </ul>
            <ul>
              <Toggle
                onClick={() => toggleCollapsible(5)}
                isActive={dropNumber === 5}
              >
                <h3>Africa</h3>
                <MdKeyboardArrowDown className="icon" />
              </Toggle>

              <Collapsible isExpanded={dropNumber === 5}>
                <LinkItem
                  onClick={e => handleScroll(e, 'sul')}
                  isClicked={elClass === 'sul'}
                >
                  Sul
                </LinkItem>
                <LinkItem
                  onClick={e => handleScroll(e, 'norte')}
                  isClicked={elClass === 'norte'}
                >
                  Norte
                </LinkItem>
                <LinkItem
                  onClick={e => handleScroll(e, 'sudeste')}
                  isClicked={elClass === 'sudeste'}
                >
                  Sudeste
                </LinkItem>
                <LinkItem
                  onClick={e => handleScroll(e, 'nordeste')}
                  isClicked={elClass === 'nordeste'}
                >
                  Nordeste
                </LinkItem>
                <LinkItem
                  onClick={e => handleScroll(e, 'centro-oeste')}
                  isClicked={elClass === 'centro-oeste'}
                >
                  Centro-oeste
                </LinkItem>
              </Collapsible>
            </ul>
            <ul>
              <Toggle
                onClick={() => toggleCollapsible(6)}
                isActive={dropNumber === 6}
              >
                <h3>Explorar</h3>
                <MdKeyboardArrowDown className="icon" />
              </Toggle>

              <Collapsible isExpanded={dropNumber === 6}>
                <LinkItem
                  onClick={e => handleScroll(e, 'sul')}
                  isClicked={elClass === 'sul'}
                >
                  Sul
                </LinkItem>
                <LinkItem
                  onClick={e => handleScroll(e, 'norte')}
                  isClicked={elClass === 'norte'}
                >
                  Norte
                </LinkItem>
                <LinkItem
                  onClick={e => handleScroll(e, 'sudeste')}
                  isClicked={elClass === 'sudeste'}
                >
                  Sudeste
                </LinkItem>
                <LinkItem
                  onClick={e => handleScroll(e, 'nordeste')}
                  isClicked={elClass === 'nordeste'}
                >
                  Nordeste
                </LinkItem>
                <LinkItem
                  onClick={e => handleScroll(e, 'centro-oeste')}
                  isClicked={elClass === 'centro-oeste'}
                >
                  Centro-oeste
                </LinkItem>
              </Collapsible>
            </ul>
          </aside>

          <div class="border"></div>

          <div className="content" data-scroll data-scroll-speed="0">
            <section id="sul">
              <h2>Sul</h2>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Assumenda perspiciatis eum, autem ipsa laborum repellendus quod?
                Dolores debitis animi quod voluptas fuga ad esse iure eligendi
                at similique, incidunt corrupti accusamus. In vel amet ex saepe
                numquam, neque fugiat velit blanditiis hic, nam animi eum
                quaerat quidem atque nulla doloribus laudantium perspiciatis
                aspernatur repudiandae voluptatibus? Sint, beatae quidem! Id
                facilis harum ab nesciunt eum laudantium! Repellat amet quasi
                exercitationem repellendus quibusdam itaque odio eius
                voluptatibus et sapiente laboriosam minima accusamus, natus,
                optio molestias ducimus adipisci. Delectus quasi sint quod
                asperiores quam! Officiis et maiores deleniti vitae laudantium
                eligendi sint nobis.
              </p>

              <img
                src="https://images.pexels.com/photos/975761/pexels-photo-975761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </section>
            <section id="norte">
              <h2>Norte</h2>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Assumenda perspiciatis eum, autem ipsa laborum repellendus quod?
                Dolores debitis animi quod voluptas fuga ad esse iure eligendi
                at similique, incidunt corrupti accusamus. In vel amet ex saepe
                numquam, neque fugiat velit blanditiis hic, nam animi eum
                quaerat quidem atque nulla doloribus laudantium perspiciatis
                aspernatur repudiandae voluptatibus? Sint, beatae quidem! Id
                facilis harum ab nesciunt eum laudantium! Repellat amet quasi
                exercitationem repellendus quibusdam itaque odio eius
                voluptatibus et sapiente laboriosam minima accusamus, natus,
                optio molestias ducimus adipisci. Delectus quasi sint quod
                asperiores quam! Officiis et maiores deleniti vitae laudantium
                eligendi sint nobis.
              </p>

              <img
                src="https://images.pexels.com/photos/975761/pexels-photo-975761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </section>
            <section id="sudeste">
              <h2>Sudeste</h2>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Assumenda perspiciatis eum, autem ipsa laborum repellendus quod?
                Dolores debitis animi quod voluptas fuga ad esse iure eligendi
                at similique, incidunt corrupti accusamus. In vel amet ex saepe
                numquam, neque fugiat velit blanditiis hic, nam animi eum
                quaerat quidem atque nulla doloribus laudantium perspiciatis
                aspernatur repudiandae voluptatibus? Sint, beatae quidem! Id
                facilis harum ab nesciunt eum laudantium! Repellat amet quasi
                exercitationem repellendus quibusdam itaque odio eius
                voluptatibus et sapiente laboriosam minima accusamus, natus,
                optio molestias ducimus adipisci. Delectus quasi sint quod
                asperiores quam! Officiis et maiores deleniti vitae laudantium
                eligendi sint nobis.
              </p>

              <img
                src="https://images.pexels.com/photos/975761/pexels-photo-975761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </section>
            <section id="nordeste">
              <h2>Nordeste</h2>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Assumenda perspiciatis eum, autem ipsa laborum repellendus quod?
                Dolores debitis animi quod voluptas fuga ad esse iure eligendi
                at similique, incidunt corrupti accusamus. In vel amet ex saepe
                numquam, neque fugiat velit blanditiis hic, nam animi eum
                quaerat quidem atque nulla doloribus laudantium perspiciatis
                aspernatur repudiandae voluptatibus? Sint, beatae quidem! Id
                facilis harum ab nesciunt eum laudantium! Repellat amet quasi
                exercitationem repellendus quibusdam itaque odio eius
                voluptatibus et sapiente laboriosam minima accusamus, natus,
                optio molestias ducimus adipisci. Delectus quasi sint quod
                asperiores quam! Officiis et maiores deleniti vitae laudantium
                eligendi sint nobis.
              </p>

              <img
                src="https://images.pexels.com/photos/975761/pexels-photo-975761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </section>
            <section id="centro-oeste">
              <h2>Centro-Oeste</h2>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Assumenda perspiciatis eum, autem ipsa laborum repellendus quod?
                Dolores debitis animi quod voluptas fuga ad esse iure eligendi
                at similique, incidunt corrupti accusamus. In vel amet ex saepe
                numquam, neque fugiat velit blanditiis hic, nam animi eum
                quaerat quidem atque nulla doloribus laudantium perspiciatis
                aspernatur repudiandae voluptatibus? Sint, beatae quidem! Id
                facilis harum ab nesciunt eum laudantium! Repellat amet quasi
                exercitationem repellendus quibusdam itaque odio eius
                voluptatibus et sapiente laboriosam minima accusamus, natus,
                optio molestias ducimus adipisci. Delectus quasi sint quod
                asperiores quam! Officiis et maiores deleniti vitae laudantium
                eligendi sint nobis.
              </p>

              <img
                src="https://images.pexels.com/photos/975761/pexels-photo-975761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </section>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
}
