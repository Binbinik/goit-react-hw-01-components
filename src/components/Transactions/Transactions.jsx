import PropTypes from 'prop-types';
import items from '../../data/transactions.json';
import { Table, Header, Tr, Th, Body, Td } from './Transactions.styled';

export const Transactions = () => {
  return (
    <Table>
      <Header>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Header>
      <Body>
        {items.map(item => (
          <Tr key={item.id}>
            <Td>{item.type}</Td>
            <Td>{item.amount}</Td>
            <Td>{item.currency}</Td>
          </Tr>
        ))}
      </Body>
    </Table>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default Transactions;
