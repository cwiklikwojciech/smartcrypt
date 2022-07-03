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
	const checkIfWalletIsConnect = async () => {
		try {
			if (!ethereum) return alert('Please install MetaMask.');

			const accounts = await ethereum.request({ method: 'eth_accounts' });

			console.log(accounts);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		checkIfWalletIsConnect();
	}, []);

	return <TransactionContext.Provider value={{ value: 'test' }}>{children}</TransactionContext.Provider>;
};
