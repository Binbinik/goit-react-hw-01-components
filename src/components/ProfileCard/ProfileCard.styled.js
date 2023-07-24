import styled from '@emotion/styled';

export const Container = styled.div`
  width: 400px;

  margin: auto;
  background-color: white;
  box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  align-items: center;
  flex-direction: column;
  margin-bottom: 100px;
`;

export const Description = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.div`
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;
export const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
`;

export const Pname = styled.p`
  margin-top: 30px;

  font-weight: 600;
  font-size: 25px;
`;

export const Ptag = styled.p`
  margin-top: 10px;
  color: grey;
  font-size: 12px;
`;

export const Plocation = styled.p`
  margin-top: 10px;
  color: grey;
  font-size: 16px;
`;

export const Stats = styled.ul`
  display: flex;
  width: 100%;
  height: 100px;
  margin: auto;
  border-radius: 5px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100%;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
  background-color: rgba(128, 128, 128, 0.1);
`;
export const ItemName = styled.p`
  font-size: 15px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  color: grey;
  font-weight: 500;
`;

export const ItemNum = styled.p`
  font-size: 20px;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;
