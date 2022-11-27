import PropTypes from 'prop-types';
import { FriendListBox } from './FriendList.styled';
import FriendListItem from 'components/FriendListItem/FriendListItem';
const FriendList = ({ friends }) => {
  return (
    <FriendListBox>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          isOnline={isOnline}
          avatar={avatar}
          name={name}
          key={id}
        />
      ))}
    </FriendListBox>
  );
};

export default FriendList;
