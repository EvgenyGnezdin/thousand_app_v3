import { useAppSelector } from '../../../shared/hooks/redux-hook/ReduxHook';
import { RootState } from '../../../app/store/store';
import Slider from 'react-slick';
import { PlayerFieldItem } from '../../../entities/PlayerFieldItem/ui/PlayerFieldItem';
import { useRef } from 'react';
import { Notification } from '../../../shared/ui/StyledNotification/StyledNotification';
import { StyledSlider } from './PlayerField.styles';
import { settingSlider } from '../helper/settingSlider';

export const PlayerField = () => {
  const players = useAppSelector((state: RootState) => state.addPlayer.players);
  const sliderRef = useRef<Slider | null>(null);

  const nextSlide = (): void => {
    sliderRef.current?.slickNext();
  };

  const prevSlide = (): void => {
    sliderRef.current?.slickPrev();
  };

  return (
    <>
      {players.length <= 1 && <Notification children="Добавьте игроков!" />}
      {players.length >= 2 && (
        <StyledSlider {...settingSlider} ref={sliderRef}>
          {players.map(({ name, scores, id }) => (
            <PlayerFieldItem name={name} scores={scores} key={id} id={id} nextSlide={nextSlide} prevSlide={prevSlide} />
          ))}
        </StyledSlider>
      )}
    </>
  );
};
