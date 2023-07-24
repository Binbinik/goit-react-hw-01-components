import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  margin: auto;
  width: 400px;
  height: 100px;

  align-items: center;
  flex-direction: column;
  margin-bottom: 400px;
`;

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FriendsListItem = styled.li`
  width: 250px;
  display: flex;
  align-items: center;

  margin-bottom: 10px;
  justify-content: center;
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.2);
  background-color: white;
`;

export const StatusItem = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  background-color: ${props => (props.status ? 'lightgreen' : 'red')};
`;

export const AvatarImg = styled.img`
  width: 48px;

  margin-left: 40px;
  border-radius: 50%;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 40px;
`;

export const Pname = styled.p`
  display: flex;
  width: 50px;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  margin-left: 10px;
  margin-right: 50px;
`;
