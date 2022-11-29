import React, { useEffect, useRef } from "react";

const TradingView = () => {
  const _ref = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          proName: "FOREXCOM:SPXUSD",
          title: "S&P 500",
        },
        {
          proName: "FOREXCOM:NSXUSD",
          title: "US 100",
        },
        {
          proName: "FX_IDC:EURUSD",
          title: "EUR/USD",
        },
        {
          proName: "BITSTAMP:BTCUSD",
          title: "Bitcoin",
        },
        {
          proName: "BITSTAMP:ETHUSD",
          title: "Ethereum",
        },
      ],
      showSymbolLogo: true,
      colorTheme: "light",
      isTransparent: false,
      displayMode: "adaptive",
      locale: "en",
    });
    _ref.current.appendChild(script);
  }, []);
  return (
    <div
      className="tradingview-widget-container"
      style={{ margin: "auto" }}
      ref={_ref}
    >
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TradingView;
