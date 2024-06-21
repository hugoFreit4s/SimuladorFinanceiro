// components/DropdownMenu.js
import { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        Menu
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <input type="text" placeholder="Input 1" className="dropdown-input" />
          <input type="text" placeholder="Input 2" className="dropdown-input" />
          <input type="text" placeholder="Input 3" className="dropdown-input" />
        </div>
      )}
      <style jsx>{`
        .dropdown {
          display: inline-block;
          width: 100%;
        }
        .dropdown-button {
          background-color: #4CAF50;
          color: white;
          padding: 16px;
          font-size: 16px;
          border: none;
          cursor: pointer;
          width: 100%;
          text-align: left;
        }
        .dropdown-content {
          display: flex;
          flex-direction: column;
          margin-top: 8px;
          width: 100%;
        }
        .dropdown-input {
          padding: 12px 16px;
          margin: 2px 0;
          border: 1px solid #ddd;
          box-sizing: border-box;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default DropdownMenu;
