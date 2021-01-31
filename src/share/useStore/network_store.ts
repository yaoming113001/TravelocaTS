import React, { useEffect, useState } from "react"
import NetInfo from '@react-native-community/netinfo';

export const useNetworkStore = () => {
  const [netInfo, setNetInfo] = useState('');

  useEffect(() => {
    // Subscribe to network state updates
    const unsubscribe = NetInfo.addEventListener((state) => {
      setNetInfo(
        `Connection type: ${state.isConnected}`
      );
    });

    return () => {
      // Unsubscribe to network state updates
      unsubscribe();
    };
  }, [setNetInfo]);

  const getNetInfo = () => {
    // To get the network state once
    NetInfo.fetch().then((state) => {
      console.log(state.isConnected)
    });
  };

  return { netInfo, getNetInfo };
}