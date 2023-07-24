import styled from '@emotion/styled';

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  width: 400px;
  justify-content: center;
  align-items: center;
  margin: 15px auto;
  border-collapse: collapse;
`;

export const Header = styled.thead`
  background-color: blue;
  display: flex;

  padding: 5px 0 5px 0;
  margin: auto;
`;

export const Tr = styled.tr`
  width: 400px;
  padding-right: 40px;
  padding: 5px 0 5px 0;
`;

export const Th = styled.th`
  width: 400px;
  margin-right: 40px;
  padding-left: 20px;
  padding: 5px 0px 5px 30px;

  color: white;
`;

export const Body = styled.tbody``;

export const Td = styled.td`
  padding: 5px 0 5px 30px;

  border: 1px solid grey;
  width: 400px;
  justify-content: center;
`;
