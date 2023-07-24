import PropTypes from 'prop-types';
import FriendListItem from './FriendsListItem/FriendListItem';
import { Container, FriendsList } from './FriendsList.styled';

export const Friends = ({ friends }) => {
  return (
    <Container>
      <FriendsList>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <FriendListItem
              key={id}
              avatar={avatar}
              name={name}
              isOnline={isOnline}
            />
          );
        })}
      </FriendsList>
    </Container>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Friends;
