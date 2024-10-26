import {
  HighlightContextProps,
  HighlightsContext,
} from '@/context/HighlightsContext';
import { useContext } from 'react';

function useHighlights(): HighlightContextProps {
  const context = useContext(HighlightsContext);
  return context;
}

export default useHighlights;
