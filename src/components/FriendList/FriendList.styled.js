import styled from '@emotion/styled';

export const FriendListBox = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Item = styled.li`
  background-color: #9ae6b3;
  min-width: 450px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin: 8px;
  padding: 12px;
  justify-content: center;
`;
export const Status = styled.span`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${props => {
    console.log(props.isOnline);
    switch (props.isOnline) {
      case false:
        return 'red';
      case true:
        return 'green';
      default:
        return '#fff';
    }
  }};
`;
export const Avatar = styled.img`
  width: 120px;
`;
export const Name = styled.p`
  font-size: 32px;
  line-height: 24px;
  color: rgb(51, 38, 38);
`;
