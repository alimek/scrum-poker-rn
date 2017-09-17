import { createSelector } from 'reselect';
import { userNameSelector } from '../../selectors/userSelectors';

export default createSelector(
  userNameSelector,
  userName => ({ userName }),
);
