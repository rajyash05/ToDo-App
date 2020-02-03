import React from "react";
import PopoverComponent from 'react-tiny-popover'

const Popover = ({ position = "bottom", isOpen, trigger, children, togglePopover }) => (
    <PopoverComponent
        isOpen={isOpen}
        position={position}
        content={children}
        onClickOutside={togglePopover}
    >
        {trigger()}
    </PopoverComponent>
)

export default Popover;