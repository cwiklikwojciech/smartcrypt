import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;

const createEthereumContract = () => {
	const provider = new ethers.providers.Web3Provider(ethereum);
	const signer = provider.getSigner();
	const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

	return transactionsContract;
};

export const TransactionsProvider = ({ children }) => {
	const [ connectedAccount, setconnectedAccount ] = useState('');

	const checkIfWalletIsConnect = async () => {
		try {
			if (!ethereum) return alert('Please install MetaMask.');

			const accounts = await ethereum.request({ method: 'eth_accounts' });

			console.log(accounts);
		} catch (error) {
			console.log(error);
		}
	};

	const connectWallet = async () => {
		console.log('Test');
		try {
			if (!ethereum) return alert('Please install MetaMask.');

			const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

			setCurrentAccount(accounts[0]);
		} catch (error) {
			console.log(error);

			throw new Error('No etherum object');
		}
	};

	useEffect(() => {
		checkIfWalletIsConnect();
	}, []);

	return (
		<TransactionContext.Provider value={{ connectWallet: connectWallet }}>{children}</TransactionContext.Provider>
	);
};
