import { RootState } from '#app/store/store.ts';
import { removePlayerList } from '#feature/AddPlayer/store/AddPlayer.ts';
import { useAppDispatch, useAppSelector } from '#shared/hooks/redux-hook/ReduxHook.ts';
import { Notification } from '#shared/ui/Notification/StyledNotification.tsx';
import { Title } from '#shared/ui/Title/Title.tsx';
import { RiDeleteBin7Fill } from "react-icons/ri";
import { ListPlayersContainer, ListPlayersItems } from './StyledLIstPlayer';
export const ListPlayers = () => {
  const players = useAppSelector((state: RootState) => state.addPlayer.players);
  const dispatch = useAppDispatch();
  return (
    <>
      <ListPlayersContainer>
        {!players.length && <Notification children='Список игроков пуст!'/>}
        {players.map((player, i) => (
          <ListPlayersItems key={player.id}>
            <Title as="h4" size={16}>
              {++i}.{player.name}
            </Title>
            <Title as="h4" size={16}>
              {player.scores}
            </Title>
            <RiDeleteBin7Fill cursor="pointer" color="#ff5757" width={25} height={25} onClick={() => dispatch(removePlayerList(player))}/>
          </ListPlayersItems>
        ))}
      </ListPlayersContainer>
    </>
  );
};
