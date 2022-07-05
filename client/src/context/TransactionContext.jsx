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
	const [ CurrentAccount, setCurrentAccount ] = useState('');
	const [ formData, setFormData ] = useState({ addressTo: '', amount: '', keyword: '', message: '' });

	const handleChange = (e, name) => {
		setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
	};

	const checkIfWalletIsConnect = async () => {
		try {
			if (!ethereum) return alert('Please install MetaMask.');

			const accounts = await ethereum.request({ method: 'eth_accounts' });

			if (accounts.length) {
				setCurrentAccount(accounts[0]);
			} else {
				console.log('No accounts found');
			}

			console.log(accounts);
		} catch (error) {
			throw new Error('No etherum object');
		}
	};

	const connectWallet = async () => {
		try {
			if (!ethereum) return alert('Please install MetaMask.');

			const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

			setCurrentAccount(accounts[0]);
		} catch (error) {
			console.log(error);

			throw new Error('No etherum object');
		}
	};

	const sendTransaction = async () => {
		try {
			if (!ethereum) return alert('Please install MetaMask.');

			//get the data from the form
		} catch (error) {
			console.log(error);

			throw new Error('No etherum object');
		}
	};

	useEffect(() => {
		checkIfWalletIsConnect();
	}, []);

	return (
		<TransactionContext.Provider
			value={{ connectWallet, CurrentAccount, formData, setFormData, handleChange, sendTransaction }}
		>
			{children}
		</TransactionContext.Provider>
	);
};
