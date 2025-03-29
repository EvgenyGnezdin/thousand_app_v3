import { RootState } from '#app/store/store.ts';
import { removePlayerList } from '#featers/AddPlayer/store/AddPlayer.ts';
import { useAppDispatch, useAppSelector } from '#shared/hooks/redux-hook/ReduxHook.ts';
import { Button } from '#shared/index.ts';
import { ListPlayersContainer, ListPlayersItems } from '#shared/ui/StyledListPlayer/StyledLIstPlayer.tsx';
import { Notification } from '#shared/ui/StyledNotification/StyledNotification.tsx';
import { Title } from '#shared/ui/Title/Title.tsx';


export const ListPlayers = () => {
  const players = useAppSelector((state: RootState) => state.addPlayer.players);
  const dispatch = useAppDispatch();
  return (
    <>
      <ListPlayersContainer>
        {!players.length && <Notification children='Список игроков пуст!'/>}
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
