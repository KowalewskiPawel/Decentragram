export default async function connectWallet(setWalletStatus, setWalletAddress) {
  try {
    const { solana } = window;

    if (solana && solana.isPhantom) {
      const response = await solana.connect();
      setWalletStatus("Connected");
      setWalletAddress(response.publicKey.toString());
    }
  } catch (error) {
    console.error(error);
    setWalletStatus("Error occurred");
  }
}
