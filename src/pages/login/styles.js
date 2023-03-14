import styled from 'styled-components';

export const ContainerLogin = styled.div`
  background-image: url('https://picsum.photos/1200/1080');
  background-repeat: no-repeat;
  background-size: 50% 100%;
  min-height: calc(100vh - 7rem);


  position: relative;

  .socials{
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 50%;

      box-sizing: border-box;

      display: flex;
      justify-content: space-between;
      align-items: center;

      border-top: 1px solid var(--gray-100);
      padding: 3rem;

      > span {
        font-size: 1rem;
      }

      .buttons {
      display: flex;
      justify-content: space-between;


      gap: 0.5rem;

      a {
        padding: 0.5rem;
        border-radius: 12px;
        width: 100%;
        min-width: 8rem;

        font-size: 0.8rem;

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
    }

  .content {
    display: flex;
    justify-content: flex-end;

    section {
      margin: 2rem 0;
      width: 50%;
      text-align: center;
    }

    .btn-primary{
      width: 60%;
    }

    h1,
    p,
    form {
      padding-left: 6rem;
      margin-top: 2rem;
    }

    form div {
      display: flex;
      align-items: center;
      justify-content: center;

      color: var(--gray-200);

      margin-bottom: 1rem;

      a{
      margin: 0 0.5rem;
      color: var(--gray-200);
      font-size: 0.8rem;
    }

    span {
      font-size: 0.5rem;
    }
    }

    strong {
      color: var(--secondary);
      display: block;
    }

    form input {
      display: block;

      width: 100%;
      margin-bottom: 1rem;
      border: 1px solid var(--gray-200);
      border-radius: 12px;

      box-sizing: border-box;
      height: 3rem;
      padding: 1.5rem 1rem;

      &::placeholder {
        color: #89959E;
    }
  }
`;
