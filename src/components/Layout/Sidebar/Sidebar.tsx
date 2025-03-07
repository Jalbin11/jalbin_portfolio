import React, { useState } from 'react';
import { SidebarContainer, CommandPalette, CommandInput, SidebarButton } from './Sidebar.styles';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SidebarButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : 'Contact Me'}
      </SidebarButton>
      <SidebarContainer $isOpen={isOpen}>
        <CommandPalette>
          <CommandInput placeholder="Search or type a command..." />
          {/* Add command palette items here */}
        </CommandPalette>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;