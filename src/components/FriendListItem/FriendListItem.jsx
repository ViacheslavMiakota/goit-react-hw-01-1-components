import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './FriendListItem.styled';

const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <Item key={id}>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};
export default FriendListItem;

FriendListItem.prototype = {
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.string.isRequired,
  avatar: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
};
