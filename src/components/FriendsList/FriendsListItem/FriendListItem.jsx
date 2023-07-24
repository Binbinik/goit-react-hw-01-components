import PropTypes from 'prop-types';
import {
  FriendsListItem,
  StatusItem,
  AvatarImg,
  Pname,
} from '../FriendsList.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsListItem>
      <StatusItem status={isOnline}></StatusItem>
      <AvatarImg src={avatar} alt="User avatar" width="48" />
      <Pname>{name}</Pname>
    </FriendsListItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
