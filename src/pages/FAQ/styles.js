import styled from 'styled-components';

export const ContainerFaq = styled.div`
  margin-bottom: 1rem;
  min-height: 100vh;
  h1 {
    padding: 3.5rem 0;
    border-bottom: 1px solid var(--gray-100);
  }
`;

export const Toggle = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 2rem 0;
  border-bottom: 1px solid var(--gray-100);
  cursor: pointer;

  .icon {
    font-size: 2rem;
    color: var(--gray-200);
    transition: transform 0.2s;
    transform: ${props => (props.isActive ? 'rotate(180deg)' : 'rotate(0deg)')};
  }

  p {
    color: #333;
    text-shadow: ${props => (props.isActive ? '0 0 1px var(--dark);' : 'none')};
    transition: font-weight 0.2s ease-in;
  }
`;

export const Dropdown = styled.div`
  border-bottom: 1px solid var(--gray-100);

  p {
    padding: 2rem 0 3rem 0;
    color: var(--gray-200);
  }
`;
