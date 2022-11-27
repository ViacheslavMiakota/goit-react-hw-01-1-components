import PropTypes from 'prop-types';
import friends from 'friends.json';
import { FriendListBox, Item, Status, Avatar, Name } from './FriendList.styled';

const FriendList = () => {
  return (
    <FriendListBox>
      <FriendListItem />
    </FriendListBox>
  );
};
const FriendListItem = () => {
  return friends.map(({ id, isOnline, avatar, name }) => {
    return (
      <Item key={id}>
        <Status isOnline={isOnline}>{isOnline}</Status>
        <Avatar src={avatar} alt="User avatar" width="48" />
        <Name>{name}</Name>
      </Item>
    );
  });
};
export default FriendList;
FriendListItem.prototype = {
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.string.isRequired,
  avatar: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
};
