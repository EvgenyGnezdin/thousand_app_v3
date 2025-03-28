import { RootState } from '../../../app/store/store';
import { Button } from '../../../shared';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux-hook/ReduxHook';
import { ListPlayersContainer, ListPlayersItems } from '../../../shared/ui/StyledListPlayer/StyledLIstPlayer';
import { Title } from '../../../shared/ui/Title/Title';
import { removePlayerList } from '../../AddPlayer/store/AddPlayer';

export const ListPlayers = () => {
  const players = useAppSelector((state: RootState) => state.addPlayer.players);
  const dispatch = useAppDispatch();
  return (
    <>
      <ListPlayersContainer>
        {!players.length && <h1>Список игроков пуст</h1>}
        {players.map((player, i) => (
          <ListPlayersItems key={player.id}>
            <Title as="span" size={18}>
              {++i}
            </Title>
            <Title as="h4" size={20}>
              {player.name}
            </Title>
            <Title as="h4" size={20}>
              {player.scores}
            </Title>
            <Button onClick={() => dispatch(removePlayerList(player))} activetab="true" width={40} height={40}>
              X
            </Button>
          </ListPlayersItems>
        ))}
      </ListPlayersContainer>
    </>
  );
};
