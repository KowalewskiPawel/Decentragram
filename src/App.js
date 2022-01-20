import React, { useState, useEffect } from "react";

import isWalletConnected from "./utils/isWalletConnected";
import connectWallet from "./utils/connectWallet";

import "./App.css";
import Wallet from "./components/Wallet";
import Logo from "./components/Logo";

const App = () => {
  const [walletStatus, setWalletStatus] = useState("Not Connected");
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    const onLoad = async () => {
      await isWalletConnected(setWalletStatus, setWalletAddress);
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <>
      <Logo />
      <Wallet
        walletStatus={walletStatus}
        walletAddress={walletAddress}
        connectFunction={connectWallet(setWalletStatus, setWalletAddress)}
      />
    </>
  );
};

export default App;
