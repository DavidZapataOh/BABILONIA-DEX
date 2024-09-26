import React from 'react';

const TokenPairIcon = ({ token1Image, token2Image }) => {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center rounded-full overflow-hidden border border-primary">
      <img
        src={token1Image}
        alt="Token 1"
        className="w-11 h-11 object-cover absolute left-0"
        style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }}
      />
      <img
        src={token2Image}
        alt="Token 2"
        className="w-11 h-11 object-cover absolute right-0"
        style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" }}
      />
    </div>
  );
};

export default TokenPairIcon;
