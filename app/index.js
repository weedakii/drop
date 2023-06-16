import { Redirect, SplashScreen } from "expo-router";
import { useEffect, useState } from "react";

const StartPage = () => {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    // Perform some sort of async data or asset fetching.
    setTimeout(() => {
      setReady(true);
    }, 3000);
  }, []);

  if (isReady) {
    return <Redirect href="/home" />;
  } else {
    return <SplashScreen />;
  }
};

export default StartPage;
