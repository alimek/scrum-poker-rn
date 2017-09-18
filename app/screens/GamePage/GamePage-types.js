// @flow
import type { Navigation } from '../../types/navigation';

type GamePage = {
  userName: string,
};

export type GamePageProps = Navigation & GamePage;
