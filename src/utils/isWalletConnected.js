export default async function isWalletConnected(
  setWalletStatus,
  setWalletAddress
) {
  try {
    const { solana } = window;

    if (solana && solana.isPhantom) {
      const response = await solana.connect({ onlyIfTrusted: true });
      setWalletStatus("Connected");
      setWalletAddress(response.publicKey.toString());
    }
  } catch (error) {
    console.error(error);
    setWalletStatus("Error occurred");
  }
}
