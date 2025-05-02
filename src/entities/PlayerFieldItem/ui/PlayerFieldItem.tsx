import { useState } from 'react';
import { Button } from '../../../shared';
import { Input } from '../../../shared/ui/Input/Input';
import { Title } from '../../../shared/ui/Title/Title';
import { useAppDispatch } from '../../../shared/hooks/redux-hook/ReduxHook';
import { Notification } from '../../../shared/ui/Notification/StyledNotification';
import { increasePlayerScore } from '#feature/AddPlayer/store/AddPlayer.ts';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { PlayerFieldButtonBlock, PlayerFieldContainer } from './StyledPlayerFieldItem';

export const PlayerFieldItem = ({ scores, id, name, nextSlide, prevSlide }: { scores: number; id: number; name: string; nextSlide: () => void; prevSlide: () => void }) => {
  const [text, setText] = useState('');
  const [startScores, setStartScores] = useState(false);
  const [barrel, setBarrel] = useState(false);
  const [winner, setWinner] = useState(false);
  const dispatch = useAppDispatch();

  const handleScores = () => {
    if (scores == 0 && +text < 50) {
      setStartScores(true);
      setText('');
      return;
    }
    if ((scores >= 300 && scores <= 400 && scores + +text <= 399) || (scores >= 700 && scores <= 800 && scores + +text <= 799)) {
      setBarrel(true);
      setText('');
      return;
    }
    dispatch(
      increasePlayerScore({
        name,
        id,
        scores: +text,
      }),
    );
    if (scores + +text == 1000) {
      setWinner(true);
      setText('');
      return;
    }
    setText('');
    setTimeout(() => {
      setBarrel(false);
      setStartScores(false);
    }, 1000);
    nextSlide();
  };
  const screenWidth = window.screen.width < 450 || false
  return (
    <>
      {winner && <Notification children="Поздравляю вы набрали 1000 очков!!! И победили!!!" />}
      {!winner && 
        <PlayerFieldContainer key={id}>
          {startScores && <Notification children="Для старта нужно минимум 50 очков!"/>}
          {barrel && <Notification children="Вы в бочке!"/>}
          <Title color='#2563eb' as="h4">{name}</Title>
          <Title as="h4">{scores}</Title>
          <Input value={text} type="number" onChange={(e) => setText(e.target.value)} />
          <PlayerFieldButtonBlock>
            <FaArrowLeft onClick={prevSlide} color='#2563eb'/>
            <Button activetab="true" onClick={handleScores}>{!screenWidth ? "Увеличить счетю" : <GrAdd/>}</Button>
            <FaArrowRight onClick={nextSlide} color='#2563eb'/>
          </PlayerFieldButtonBlock>
        </PlayerFieldContainer>
        }
    </>
  );
};
