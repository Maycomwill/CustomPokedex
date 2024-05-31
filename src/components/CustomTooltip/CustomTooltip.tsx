import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import React, { ReactElement } from "react";
import theme from "../../styles/theme";
import { Fade, Zoom } from "@mui/material";

interface ITooltipProps extends TooltipProps {
  title: string;
  children: ReactElement;
}

function CustomTooltip({ title, children }: ITooltipProps) {
  const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(() => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.colors.gray[500],
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.colors.gray[500],
      fontSize: 16,
      textTransform: "capitalize",
    },
  }));
  return (
    <BootstrapTooltip
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 250 }}
      title={title}
    >
      {children}
    </BootstrapTooltip>
  );
}

export default CustomTooltip;
