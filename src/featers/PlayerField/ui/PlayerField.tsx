import { useAppSelector } from '../../../shared/hooks/redux-hook/ReduxHook';
import { RootState } from '../../../app/store/store';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PlayerFieldItem } from '../../../entities/PlayerFieldItem/ui/PlayerFieldItem';
import { useRef } from 'react';
import { Notification } from '../../../shared/ui/StyledNotification/StyledNotification';

export const PlayerField = () => {
  const players = useAppSelector((state: RootState) => state.addPlayer.players);
  const sliderRef = useRef(null);
  const nextSlide = () => {
    sliderRef.current?.slickNext();
  };
  const prevSlide = () => {
    sliderRef.current?.slickPrev();
  };
  const settings = {
    dots: false,
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    speed: 0,
  };

  //Стили слайдера, потом перенести в отдельный компонент!!!
  const styledSlick = {
    width: '100%',
    height: 'calc(100vh - 320px)',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
  };

  return (
    <>
      {players.length <= 1 && <Notification children="Добавьте игроков!"/>}
      {players.length >= 2 && (
        <Slider {...settings} style={{ ...styledSlick }} ref={sliderRef}>
          {players.map(({ name, scores, id }) => (
            <PlayerFieldItem 
              name={name} 
              scores={scores} 
              key={id} 
              id={id} 
              nextSlide={nextSlide} 
              prevSlide={prevSlide} 
            />
          ))}
        </Slider>
      )}
    </>
  );
};
