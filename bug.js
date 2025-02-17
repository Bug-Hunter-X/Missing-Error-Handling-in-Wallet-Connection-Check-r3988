function checkIfWalletIsConnected() {
  const { ethereum } = window;

  if (!ethereum) {
    console.log('Make sure you have Metamask installed!');
    return;
  }

  console.log('Wallet is connected!');
}