async function checkIfWalletIsConnected() {
  const { ethereum } = window;

  if (!ethereum) {
    console.log('Make sure you have Metamask installed!');
    return;
  }

  try {
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    if (accounts.length > 0) {
      const account = accounts[0];
      console.log('Wallet is connected:', account);
      return account; 
    } else {
      console.log('Connect to MetaMask to continue.');
      return null; // or throw an error
    }
  } catch (error) {
    console.error('Error connecting to MetaMask:', error);
    return null; // or throw an error
  }
}

// Example usage
checkIfWalletIsConnected().then(account => {
  if (account) {
    // User is connected, proceed with DApp functionality
  } else {
    // Handle the case where user is not connected
  }
});