import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Link href="/">
          <a>Home </a>
        </Link>
        <Link href="/profile">
          <a>profile </a>
        </Link>
      </div>
      {children}
    </div>
  );
};

AppLayout.PropTypes = {
  children: PropTypes.node.isRequired
};

export default AppLayout;
