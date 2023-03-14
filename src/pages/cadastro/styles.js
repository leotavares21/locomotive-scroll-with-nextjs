import styled from 'styled-components';

export const ContainerSignUp = styled.div`
  background-image: url('https://picsum.photos/1080/1080');
  background-repeat: no-repeat;
  background-size: 50% 100%;
  min-height: calc(100vh - 7rem);

  .content {
    display: flex;
    justify-content: flex-end;

    section {
      margin: 1rem 0;
      width: 40%;
      text-align: center;
    }

    h1,
    p,
    .buttons,
    form {
      padding-left: 6rem;
      margin-top: 1rem;
    }

    .buttons {
      display: flex;
      justify-content: space-between;
      gap: 0.5rem;

      a {
        padding: 1rem;
        border-radius: 12px;
        width: 100%;


        font-size: 1rem;

        &:first-of-type{
          border: 2px solid var(--gray-200);
          color: var(--gray-200);
        }

        &:last-of-type{
          background: #006AFF;
          color: var(--light);

        }

        span {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
        }
      }
    }

    strong {
      color: var(--secondary);
      display: block;
    }

    form {
      .btn-primary {
          margin-top: 1rem;
          width: 60%;
      }

      input {
        display: block;

        width: 100%;
        margin-bottom: 1rem;
        border-radius: 12px;
        border: 1px solid var(--gray-200);

        box-sizing: border-box;
        height: 3rem;
        padding: 1.5rem 1rem;

        &::placeholder {
          color: #89959E;
      }
  }
    }
`;
