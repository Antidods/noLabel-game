import { createSelector } from '@reduxjs/toolkit';

import { RootState } from './store';

export const currentUser = (state: RootState) => state.auth.user;
export const getAuthSate = (state: RootState) => !!state.auth.user.id;
export const getScore = (state: RootState) => state.game.points;
export const getLeaderboard = (state: RootState) => state.leaderboard.leaderboard;
export const getLeaderboardIsLoading = (state: RootState) => state.leaderboard.isLoading;
export const getUserScore = (state: RootState) => {
  return state.leaderboard.leaderboard.find((el: { id: number }) => el.id === state.auth.user.id);
};

export const getDataForLeaderBoard = createSelector(
  [currentUser, getAuthSate, getScore, getLeaderboard, getLeaderboardIsLoading, getUserScore],
  (player, score) => {
    return { ...player, score };
  }
);
