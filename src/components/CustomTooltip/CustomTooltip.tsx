import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import theme from "../../styles/theme";
import { Fade } from "@mui/material";

interface ITooltipProps extends TooltipProps {
  title: string | undefined;
  placement?:
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top"
    | undefined;
}

function CustomTooltip({
  title = "",
  placement = "top",
  children,
}: ITooltipProps) {
  const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip
      {...props}
      placement={placement}
      arrow
      classes={{ popper: className }}
    />
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
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>{children}</div>
    </BootstrapTooltip>
  );
}

export default CustomTooltip;
