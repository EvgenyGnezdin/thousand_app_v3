import { useState } from 'react';
import { Button } from '../../../shared';
import { Input } from '../../../shared/ui/Input/Input';
import { PlayerFieldButtonBlock, PlayerFieldContainer } from '../../../shared/ui/StyledPlayerField/StyledPlayerField';
import { Title } from '../../../shared/ui/Title/Title';
import { useAppDispatch } from '../../../shared/hooks/redux-hook/ReduxHook';
import { increasePlayerScore } from '../../../featers/AddPlayer/store/AddPlayer';
import { Notification } from '../../../shared/ui/StyledNotification/StyledNotification';

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
  return (
    <>
      {winner && <Notification children="Поздравляю вы набрали 1000 очков!!! И победили!!!" />}
      {!winner && 
        <PlayerFieldContainer key={id}>
            {startScores && <Notification children="Для старта нужно минимум 50 очков!" />}
            {barrel && <Notification children="Вы в бочке!" />}
          <Title as="h3">{name}</Title>
          <Title as="h3">{scores}</Title>
          <Input value={text} type="number" onChange={(e) => setText(e.target.value)} />
          <PlayerFieldButtonBlock>
            <Button onClick={prevSlide}>{'<'}</Button>
            <Button onClick={handleScores}>Увеличить счет.</Button>
          </PlayerFieldButtonBlock>
        </PlayerFieldContainer>
        }
    </>
  );
};
