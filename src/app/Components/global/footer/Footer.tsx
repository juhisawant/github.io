import React from "react";

const Footer: React.FC = () => (
  <footer
    className="w-full flex items-center justify-center px-6 text-center"
    style={{
      height: "var(--footer-height)",
      background: "var(--color-bg)",
      borderTop: "1px solid var(--color-border)",
    }}
  >
    <small className="text-primary">&copy; {new Date().getFullYear()} Juhi Sawant. All rights reserved.</small>
  </footer>
);

export default Footer;
