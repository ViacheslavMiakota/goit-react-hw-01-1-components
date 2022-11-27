import styled from '@emotion/styled';

export const ProfileBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 500px;
  max-height: 800px;
  background-color: rgb(185, 199, 198);
  margin: 0 auto;
  margin-top: 40px;
  padding-bottom: 40px;
  padding-top: 40px;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Avatar = styled.img`
  width: 200px;
  border-radius: 50%;
  background-color: #fff;
`;
export const Username = styled.p`
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
`;
export const Tag = styled.p``;
export const Location = styled.p`
  font-size: 24px;
  line-height: 35px;
`;
export const Stats = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
  justify-content: space-around;
`;
export const Label = styled.span`
  display: flex;
`;
export const Quantity = styled.span`
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
`;
