import { Swiper, SwiperSlide } from 'swiper/react';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

import {
  FaGooglePlay,
  FaApple,
  FaGlobeAmericas,
  FaGlobeEurope,
  FaGlobeAsia,
  FaGlobeAfrica,
} from 'react-icons/fa';
import { MdExplore } from 'react-icons/md';
import { BsMouse } from 'react-icons/bs';
import { TfiArrowCircleRight } from 'react-icons/tfi';
import { GiBrazil } from 'react-icons/gi';

import Image from 'next/image';
import ImgPhone from '../assets/img/phone.png';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { ContainerHome, ImageWrapper } from './styles';
import { Wrapper, Button } from '../styles/Utils';

import { Pagination } from 'swiper';

export default function Home() {
  return (
    <ContainerHome data-scroll-section>
      <main className="banner" data-scroll>
        <BsMouse className="icon" />
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <Wrapper className="slider">
              <article>
                <div className="card">
                  <h2>Venha fazer parte da empresa e ganhe milhas aéreas.</h2>
                  <Button className="btn-primary">Cadastrar-se</Button>
                </div>

                <div className="tags">
                  <div>
                    <FaGooglePlay className="icon-tags" />
                    <div>
                      Disponível no
                      <span>Google Play</span>
                    </div>
                  </div>
                  <div>
                    <FaApple className="icon-tags" />{' '}
                    <div>
                      Disponível na
                      <span>Apple Store</span>
                    </div>
                  </div>
                </div>
              </article>
            </Wrapper>

            <div className="video">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ZRqP3wNRglY"
                width="100%"
                height="100%"
                controls={false}
                muted
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Wrapper className="slider">
              <article>
                <div className="card">
                  <h2>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </h2>
                  <Button className="btn-primary">Cadastrar-se</Button>
                </div>

                <div className="tags">
                  <div>
                    <FaGooglePlay className="icon-tags" />
                    <div>
                      Disponível no
                      <span>Google Play</span>
                    </div>
                  </div>
                  <div>
                    <FaApple className="icon-tags" />{' '}
                    <div>
                      Disponível na
                      <span>Apple Store</span>
                    </div>
                  </div>
                </div>
              </article>
            </Wrapper>

            <div className="video">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ZRqP3wNRglY"
                width="100%"
                height="100%"
                controls={false}
                muted
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Wrapper className="slider">
              <article>
                <div className="card">
                  <h2>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </h2>
                  <Button className="btn-primary">Cadastrar-se</Button>
                </div>

                <div className="tags">
                  <div>
                    <FaGooglePlay className="icon-tags" />
                    <div>
                      Disponível no
                      <span>Google Play</span>
                    </div>
                  </div>
                  <div>
                    <FaApple className="icon-tags" />{' '}
                    <div>
                      Disponível na
                      <span>Apple Store</span>
                    </div>
                  </div>
                </div>
              </article>
            </Wrapper>

            <div className="video">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ZRqP3wNRglY"
                width="100%"
                height="100%"
                controls={false}
                muted
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </main>

      <section className="modalities">
        <Wrapper>
          <div className="texts">
            <h1
              data-scroll
              data-scroll-class="scroll-class"
              data-scroll-repeat="true"
            >
              Modalidades
            </h1>
            <div
              data-scroll
              data-scroll-class="scroll-class"
              data-scroll-repeat="true"
              data-scroll-delay="0.18"
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                porro?
              </p>
              <a href="">Veja todas &rarr;</a>
            </div>
          </div>

          <div className="items">
            <Swiper
              slidesPerView={5.5}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
              data-scroll
              data-scroll-speed="1"
              data-scroll-direction="horizontal"
            >
              <SwiperSlide>
                <a href="#">
                  <span>Nacional</span>
                  <GiBrazil className="icon" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <span>Americas</span>
                  <FaGlobeAmericas className="icon" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <span>Europa</span>
                  <FaGlobeEurope className="icon" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <span>Asia</span>
                  <FaGlobeAsia className="icon" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <span>Africa</span>
                  <FaGlobeAfrica className="icon" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <span>Nacional</span>
                  <MdExplore className="icon" />
                </a>
              </SwiperSlide>
            </Swiper>
            <Swiper
              slidesPerView={5}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
              data-scroll
              data-scroll-speed="2"
              data-scroll-direction="horizontal"
            >
              <SwiperSlide>
                <a href="#">
                  <span>Nacional</span>
                  <GiBrazil className="icon" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <span>Americas</span>
                  <FaGlobeAmericas className="icon" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <span>Europa</span>
                  <FaGlobeEurope className="icon" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <span>Asia</span>
                  <FaGlobeAsia className="icon" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <span>Africa</span>
                  <FaGlobeAfrica className="icon" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <span>Nacional</span>
                  <MdExplore className="icon" />
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
        </Wrapper>
      </section>

      <section className="banner-2">
        <Wrapper className="customWrapper">
          <div
            className="texts"
            data-scroll
            data-scroll-class="scroll-class"
            data-scroll-repeat="true"
          >
            <h2>Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem quos at repudiandae?
            </p>
            <Button className="btn-primary">
              <span>Baixe Agora</span> <TfiArrowCircleRight />
            </Button>
          </div>

          <ImageWrapper
            data-scroll
            data-scroll-class="scroll-class"
            data-scroll-repeat="true"
          >
            <Image
              src={ImgPhone}
              width={200}
              height={400}
              objectFit="contain"
              alt=""
            />
          </ImageWrapper>

          <div className="socials">
            <div className="tags">
              <div>
                <FaGooglePlay className="icon-tags" />
                <div>
                  Disponível no
                  <span>Google Play</span>
                </div>
              </div>
              <div>
                <FaApple className="icon-tags" />{' '}
                <div>
                  Disponível na
                  <span>Apple Store</span>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </ContainerHome>
  );
}
