import { GameContext, GameContextProps } from '@/context/GamesContext';
import { useContext } from 'react';

export default function useGames(): GameContextProps {
  const context = useContext(GameContext);
  return context;
}
