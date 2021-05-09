import React from "react";
import AppRouter from "./AppRouter";

declare global {
  interface Window {
    kakao: any;
  }
}

const App: React.FC = () => {
  return <AppRouter />;
};

export default App;
