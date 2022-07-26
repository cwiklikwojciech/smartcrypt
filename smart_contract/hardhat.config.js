/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-ethers');
const API_URL = 'https://eth-goerli.alchemyapi.io/v2/nYyypT3J8YBEkm3GGAJIUKGpo9hX01Wu';
const PRIVATE_KEY = 'a81f2b4776f2a2241f75bef504af5b4b9c67efb27a58b439f2e05a5e5bbbfce6';
const PUBLIC_KEY = 'nYyypT3J8YBEkm3GGAJIUKGpo9hX01Wu';

module.exports = {
	version: '0.8.8',
	defaultNetwork: 'goerli',
	settings: {
		optimizer: {
			enabled: true,
			runs: 200
		}
	},
	networks: {
		goerli: {
			url: API_URL,
			accounts: [ 'a81f2b4776f2a2241f75bef504af5b4b9c67efb27a58b439f2e05a5e5bbbfce6' ]
		}
	}
};

// module.exports = {
// 	solidity: {
// 		version: '0.8.12'
// 	},
// 	networks: {
// 		mainnet: {
// 			chainId: 1,
// 			url: 'https://mainnet.infura.io/v3/' + INFURA_KEY,
// 			accounts: [ PRIVATE_KEY ]
// 		}
// 	}
// };
