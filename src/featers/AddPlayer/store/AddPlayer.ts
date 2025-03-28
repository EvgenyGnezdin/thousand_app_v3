import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ItemType, State } from './model';

const initialState: State = {
  players: [],
};

export const addPlayerSlice = createSlice({
  name: 'addPlayer',
  initialState,
  reducers: {
    addPlayerList: (state, action: PayloadAction<ItemType>) => {
      state.players.push(action.payload);
    },
    removePlayerList: (state, action: PayloadAction<ItemType>) => {
      state.players = state.players.filter((player) => player.id !== action.payload.id);
    },
    increasePlayerScore: (state, action: PayloadAction<ItemType>) => {
      const { id, scores } = action.payload;
      const index = state.players.findIndex((player) => player.id === id);
      if (index !== -1) state.players[index].scores += scores;

      state.players.map((player) => {
        if (player.id === id) {
          return player;
        }
        if (player.scores >= state.players[index].scores - scores && player.scores < state.players[index].scores) {
          player.scores -= 50;
          if (player.scores <= 0) {
            player.scores = 0;
          }
        }
        return player;
      });
    },
  },
});

export const { addPlayerList, removePlayerList, increasePlayerScore } = addPlayerSlice.actions;
export default addPlayerSlice.reducer;
