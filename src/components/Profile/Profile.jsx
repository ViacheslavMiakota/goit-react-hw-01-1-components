import PropTypes from 'prop-types';
import {
  ProfileBox,
  Description,
  Avatar,
  Username,
  Tag,
  Location,
  Stats,
  Label,
  Quantity,
} from './Profile.styled';
const Profile = ({ username, avatar, tag, location, stats }) => {
  console.log(stats);
  return (
    <ProfileBox>
      <Description>
        <Avatar src={avatar} alt="" />
        <Username>{username}</Username>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <Stats>
        <li>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </li>
      </Stats>
    </ProfileBox>
  );
};
export default Profile;
Profile.prototype = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.element.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
