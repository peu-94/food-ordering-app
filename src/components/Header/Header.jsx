import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Craving something delicious? Whether you're in the mood for a cheesy
          pizza, a spicy biryani, or a comforting bowl of noodles, we've got you
          covered! Explore a wide range of cuisines from your favorite
          restaurants and get piping hot meals delivered straight to your
          doorstep. Satisfy your hunger with just a few clicks and enjoy the
          taste of happiness anytime, anywhere.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
