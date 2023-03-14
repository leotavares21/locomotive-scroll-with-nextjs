import styled from 'styled-components';

export const ContainerFooter = styled.div`
  background: var(--gray);
  padding-top: 3rem;

  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};

  a,
  p {
    color: var(--gray-200);
    font-size: 1rem;
  }

  .content {
    display: flex;
    justify-content: space-between;
    width: 100%;

    margin-bottom: 2rem;

    .logo {
      a {
        font-size: 2rem;
        color: var(--primary);
        display: flex;
        align-items: center;

        gap: 0.25rem;

        font-family: 'Righteous', sans-serif;
      }
    }

    li {
      margin-bottom: 1rem;
    }

    ul h4 {
      font-weight: bold;
      margin-bottom: 1.5rem;
    }
  }

  .links {
    display: flex;
    justify-content: space-between;

    border-top: 1px solid var(--gray-100);
    padding: 1.5rem 0 3rem;

    a,
    p {
      max-width: 30%;
    }
  }
`;
