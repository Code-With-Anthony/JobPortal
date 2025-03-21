import { Tooltip } from "@mantine/core";
import React from "react";

interface ToolTipProps {
  children: React.ReactNode;
  label: string; // Tooltip label text
  position?: "top" | "right" | "bottom" | "left"; // Tooltip position (optional)
  opened?: boolean; // To control whether the tooltip is opened or not (optional)
  arrowSize?: number; // Size of the arrow (optional)
  arrowOffset?: number; // Arrow offset (optional)
}

const ToolTip: React.FC<ToolTipProps> = ({
  children,
  label,
  position = "top", // Default position is 'top'
  opened = false, // Default is closed (tooltip is not opened)
  arrowSize = 6, // Default arrow size
  arrowOffset = 29, // Default arrow offset
}) => {
  return (
    <Tooltip
      label={label}
      position={position}
      arrowSize={arrowSize}
      arrowOffset={arrowOffset}
      withArrow
      opened={opened}
    >
      {children}
    </Tooltip>
  );
};

export default ToolTip;
