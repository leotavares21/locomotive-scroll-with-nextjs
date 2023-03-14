import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import useCollapse from 'react-collapsed';
import { Wrapper } from '../../styles/Utils';
import { ContainerFaq, Dropdown, Toggle } from './styles';

function Collapsible(props) {
  const config = {
    isExpanded: props.isExpanded || false,
  };
  const { getCollapseProps } = useCollapse(config);

  return <Dropdown {...getCollapseProps()}>{props.children}</Dropdown>;
}

export default function Faq() {
  const [dropNumber, setDropNumber] = useState();

  function toggleCollapsible(number) {
    if (dropNumber === number) {
      setDropNumber();
    } else {
      setDropNumber(number);
    }
  }

  return (
    <ContainerFaq data-scroll-section data-scroll>
      <Wrapper>
        <h1>Perguntas Frequentes</h1>
        <Toggle
          onClick={() => toggleCollapsible(1)}
          isActive={dropNumber === 1}
        >
          <p>Lorem ipsum dolor sit amet consectetur?</p>
          <MdKeyboardArrowDown className="icon" />
        </Toggle>

        <Collapsible isExpanded={dropNumber === 1}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi,
            atque.
          </p>
        </Collapsible>

        <Toggle
          onClick={() => toggleCollapsible(2)}
          isActive={dropNumber === 2}
        >
          <p>Lorem ipsum dolor sit amet consectetur?</p>
          <MdKeyboardArrowDown className="icon" />
        </Toggle>

        <Collapsible isExpanded={dropNumber === 2}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi,
            atque.
          </p>
        </Collapsible>

        <Toggle
          onClick={() => toggleCollapsible(3)}
          isActive={dropNumber === 3}
        >
          <p>Lorem ipsum dolor sit amet consectetur?</p>
          <MdKeyboardArrowDown className="icon" />
        </Toggle>

        <Collapsible isExpanded={dropNumber === 3}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi,
            atque.
          </p>
        </Collapsible>

        <Toggle
          onClick={() => toggleCollapsible(4)}
          isActive={dropNumber === 4}
        >
          <p>Lorem ipsum dolor sit amet consectetur?</p>
          <MdKeyboardArrowDown className="icon" />
        </Toggle>

        <Collapsible isExpanded={dropNumber === 4}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi,
            atque.
          </p>
        </Collapsible>

        <Toggle
          onClick={() => toggleCollapsible(5)}
          isActive={dropNumber === 5}
        >
          <p>Lorem ipsum dolor sit amet consectetur?</p>
          <MdKeyboardArrowDown className="icon" />
        </Toggle>

        <Collapsible isExpanded={dropNumber === 5}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi,
            atque.
          </p>
        </Collapsible>
      </Wrapper>
    </ContainerFaq>
  );
}
