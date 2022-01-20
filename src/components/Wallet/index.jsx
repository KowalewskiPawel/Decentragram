import StyledWallet from "./StyledWallet";

const Wallet = ({ walletStatus, walletAddress, connectFunction }) => {
  const renderConnectButton = () => (
    <button onClick={connectFunction}>Connect</button>
  );

  return (
    <StyledWallet>
      <h3>You Wallet is: {walletStatus}</h3>
      <h3>Public address: {walletAddress} </h3>
      {!walletAddress && renderConnectButton()}
    </StyledWallet>
  );
};

export default Wallet;
