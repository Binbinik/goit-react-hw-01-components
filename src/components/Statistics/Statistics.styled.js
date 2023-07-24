import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  margin: auto;
  width: 400px;
  height: 100px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  align-items: center;
  flex-direction: column;
  background-color: white;
  margin-bottom: 100px;
`;

export const Title = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 700;
  color: rgba(128, 128, 128, 0.8);
`;

export const ItemList = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  margin: auto;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 70px;
`;

export const ItemName = styled.p`
  font-size: 15px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  font-weight: 500;
`;

export const ItemA = styled.a`
  font-size: 20px;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;
