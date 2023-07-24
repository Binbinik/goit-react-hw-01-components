import PropTypes from 'prop-types';
import {
  Container,
  Description,
  Avatar,
  Img,
  Pname,
  Ptag,
  Plocation,
  Stats,
  Item,
  ItemName,
  ItemNum,
} from './ProfileCard.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Description>
        <Avatar>
          <Img src={avatar} alt="User avatar"></Img>
        </Avatar>
        <Pname>{username}</Pname>
        <Ptag>@{tag}</Ptag>
        <Plocation>{location}</Plocation>
      </Description>
      <Stats>
        <Item>
          <ItemName>Followers</ItemName>
          <ItemNum>{stats.followers}</ItemNum>
        </Item>
        <Item>
          <ItemName>Views</ItemName>
          <ItemNum>{stats.views}</ItemNum>
        </Item>
        <Item>
          <ItemName>Likes</ItemName>
          <ItemNum>{stats.likes}</ItemNum>
        </Item>
      </Stats>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  avatar: PropTypes.string,
  location: PropTypes.string,
  tag: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
export default Profile;
