// src/components/Navbar.js

import React from 'react';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: 'blue', color: 'white' }}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around' }}>
      <li>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Home</a>
        </li>
         <li>
        <a href="#" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Tech Department</a>
        </li>
        <li>
        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Creative Department</a>
        </li>
        <li>
        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Board Team</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
