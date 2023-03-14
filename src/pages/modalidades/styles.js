import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    border-bottom: 2px solid var(--gray);
    padding: 3rem 0;
  }
  .container-wrapper {
    width: 100%;
    min-height: 450vh;
    position: relative;

    .border {
      min-height: 450vh;
      width: 2px;
      background: var(--gray);
      position: absolute;
      left: 30%;
    }

    aside {
      position: absolute;
      width: 30%;
      height: 100vh;
      top: 0rem;

      ul {
        margin: 1.5rem 0;
      }

      h3 {
        font-size: 1.25rem;
        margin-bottom: 0.75rem;
      }
    }

    .content {
      position: absolute;
      width: 70%;
      right: 0;

      section {
        padding-top: 2rem;
        padding-left: 3rem;

        h2 {
          font-size: 2rem;
        }

        p {
          margin: 3rem 0 2rem 0;
        }

        img {
          width: 100%;
          object-fit: cover;
          border-radius: 2rem;
          height: 15rem;
          margin-bottom: 3rem;
        }
      }
    }
  }
`;

export const LinkItem = styled.li`
  cursor: pointer;
  color: ${props => (props.isClicked ? 'var(--primary)' : 'var(--gray-200)')};

  &:hover {
    color: var(--primary);
  }
`;

export const Toggle = styled.div`
  display: flex;

  cursor: pointer;

  .icon {
    transition: transform 0.2s;
    transform: ${props => (props.isActive ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;
