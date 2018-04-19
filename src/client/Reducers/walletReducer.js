
const initialState = {
  address: 'APd8oRCpwKDD8YbzuUJPg2h7VRwp6bWZUk',
  NEO: '',
  GAS: '',
  unspentGas: [],
  unspentNEO: [],
  newAddress: '',
  error: true,
};

 export function wallet(state = initialState, action) {
  switch (action.type) {
    case 'SET_WALLET':
      return Object.assign({}, state, {
        newAddress: '',
        address: action.wallet.address,
        NEO: action.wallet.NEO,
        GAS: action.wallet.GAS,
        unclaimedGas: action.wallet.unclaimedGas,
        unspentGas: action.wallet.unspentGas,
        unspentNEO: action.wallet.unspentNEO,
      });
    case 'SET_WALLET_ADDRESS':
      return Object.assign({}, state, {
        newAddress: action.newAddress,
        error: action.newAddress.length !== 34,
      });
    case 'SET_WALLET_TITLE':
      return Object.assign({}, state, {
        address: action.address,
      });
    default:
      return state;
  }
}
