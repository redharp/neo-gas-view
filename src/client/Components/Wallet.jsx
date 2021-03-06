import React from 'react';
import { Container, Header, Table, Image, Input, Button, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import CalculatorContainer from '../Containers/CalculatorContainer';

const Wallet = ({
  wallet, gasUsd, neoUsd, handleLoadWallet, updateAddress,
}) => (wallet.loaded ? (
  <Container textAlign="center">
    <Header as="h2" icon>
      <Image src="/assets/neo-logo.ico" />
      NEO Address
      <Header.Subheader>
        { wallet.address }
      </Header.Subheader>
    </Header>
    <CalculatorContainer />
    <Container>
      <Loader />
    </Container>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>NEO</Table.HeaderCell>
          <Table.HeaderCell>NEO Value</Table.HeaderCell>
          <Table.HeaderCell>GAS</Table.HeaderCell>
          <Table.HeaderCell>Unclaimed GAS</Table.HeaderCell>
          <Table.HeaderCell>Total GAS</Table.HeaderCell>
          <Table.HeaderCell>GAS Value</Table.HeaderCell>
          <Table.HeaderCell>Combined Value</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>{ wallet.NEO }</Table.Cell>
          <Table.Cell>${ (wallet.NEO * neoUsd).toFixed(2) }</Table.Cell>
          <Table.Cell>{ Number(wallet.GAS).toFixed(4) }</Table.Cell>
          <Table.Cell>{ Number(wallet.unclaimedGas).toFixed(4) }</Table.Cell>
          <Table.Cell>{ Number(wallet.GAS + wallet.unclaimedGas).toFixed(4) }</Table.Cell>
          <Table.Cell>${ ((wallet.GAS + wallet.unclaimedGas) * gasUsd).toFixed(2) }</Table.Cell>
          <Table.Cell>$
            {
             (((wallet.GAS + wallet.unclaimedGas) * gasUsd) + (wallet.NEO * neoUsd)).toFixed(2)
            }
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    <Container style={{ margin: '10px' }} textAlign="center">
      <Input
        style={{ width: '315px', marginRight: '5px' }}
        size="small"
        type="text"
        // error={wallet.error}
        value={wallet.newAddress}
        onChange={(e, data) => {
          updateAddress(data.value);
      }}
      />
      <Button size="medium" disabled={wallet.error} onClick={() => handleLoadWallet(wallet.newAddress)}>
          Check Address
      </Button>
      <footer>Input address</footer>
    </Container>
  </Container>
) : (
  <Loader active={!wallet.loaded} inline="centered" />
));

Wallet.propTypes = {

};

export default Wallet;
