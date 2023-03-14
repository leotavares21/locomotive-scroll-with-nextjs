import styled from 'styled-components';

export const ContainerHome = styled.div`
  .banner {
    background-image: url('https://images.pexels.com/photos/279329/pexels-photo-279329.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    padding-top: 8rem;
    margin-bottom: 5rem;

    .icon {
      color: var(--light);
      font-size: 3rem;

      position: absolute;
      left: 50%;
      top: 40%;
      transform: translate(-50%);
      z-index: 100;
    }
  }

  .slider {
    display: flex;
    justify-content: flex-end;

    padding: 3rem 0;

    position: relative;
  }

  .mySwiper {
    position: relative;

    .swiper-pagination {
      left: -35%;
      top: 35%;
    }

    .swiper-pagination-bullet {
      background: var(--light);
      opacity: 0.6;
      padding: 2px;
    }

    .swiper-pagination-bullet-active {
      opacity: 1;
    }
  }

  .card {
    padding: 1.5rem;
    border-radius: 20px;
    background: var(--light);
    max-width: 500px;
    margin-bottom: 1.5rem;

    h2 {
      padding-bottom: 2rem;
      border-bottom: 2px solid var(--gray);
    }

    button {
      margin-top: 1.25rem;
      width: 100%;
    }
  }

  .tags {
    display: flex;
    gap: 1rem;

    > div {
      display: flex;
      align-items: center;

      background: var(--dark);
      padding: 10px;
      border-radius: 6px;
      color: var(--light);

      font-size: 0.5rem;

      span {
        font-size: 0.8rem;
        display: block;
      }

      .icon-tags {
        font-size: 1.3rem;
        margin-right: 2px;
      }
    }
  }

  .video {
    display: flex;
    justify-content: center;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.2);

    iframe {
      width: 100%;
      height: 600px;
    }
  }

  .modalities {
    padding: 0 0 8rem;

    .texts {
      display: flex;
      justify-content: space-between;

      margin-bottom: 4rem;

      h1 {
        opacity: 0;
        transition: opacity 2s ease;
      }

      .scroll-class {
        opacity: 1;
      }

      > div {
        max-width: 40%;
        opacity: 0;
        transition: opacity 2s ease;

        p,
        a {
          color: var(--gray-200);
        }

        p {
          margin-bottom: 2rem;
        }
      }
    }

    .swiper-pagination-bullets {
      display: none;
    }

    .items {
      margin: 0 calc((99vw - 100%) / -2);

      .mySwiper {
        margin-top: 2rem;

        a {
          position: relative;

          &:hover span {
            opacity: 1;
            transition: opacity 0.2s ease-in;
          }

          span {
            position: absolute;
            padding: 1rem;
            margin: 0.5rem 0 0 0.5rem;
            border-radius: 1rem;
            background: rgba(0, 0, 0, 0.7);
            color: var(--light);
            z-index: 100;
            opacity: 0;
          }
        }
      }

      .icon {
        background: var(--gray);
        color: var(--secondary);
        padding: 3rem;
        width: 10vw;
        height: 5rem;
        border-radius: 1rem;

        position: relative;

        &::before {
          opacity: 0;
          transition: opacity 0.2s ease-in;
          position: absolute;
          top: 0;
          left: 0;
        }

        &::before {
          content: 'name';
          display: block;
          background: rgba(0, 0, 0, 0.7);
          color: var(--light);
          padding: 2rem;
          border-radius: 1rem;
          opacity: 1;
        }
      }
    }
  }

  .banner-2 {
    background: var(--secondary);
    border-radius: 2rem;
    margin: 0 1rem 2rem 1rem;
    position: relative;

    .customWrapper {
      background-image: url('https://images.pexels.com/photos/1089306/pexels-photo-1089306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
      background-repeat: no-repeat;
      background-size: 50% 90%;
      background-position: 100% 0%;
      border-radius: 50% 50% 0;

      position: relative;

      min-height: 25rem;
    }

    .texts {
      color: var(--light);
      width: 30vw;
      padding: 4rem 0;

      opacity: 0;
      transition: opacity 1.5s ease-in-out;

      &.scroll-class {
        opacity: 1;
      }

      button {
        display: flex;
        align-items: center;

        span {
          margin-right: 1rem;
        }

        .banner-2-icon {
          font-weight: 700;
          color: red;
        }
      }
      p {
        margin: 3rem 0 4rem 0;
      }
    }

    .socials {
      position: absolute;
      bottom: 2rem;
      right: 0%;
    }
  }
`;

export const ImageWrapper = styled.div`
  margin: 4rem 0;
  position: absolute;
  top: -1%;
  left: 50%;
  transform: translate(-50%);

  opacity: 0;
  transition: opacity 1s ease-in-out;

  &.scroll-class {
    opacity: 1;
  }
`;
