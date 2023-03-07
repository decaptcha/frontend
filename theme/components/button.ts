import { background } from "@chakra-ui/system";
import { mode } from "@chakra-ui/theme-tools";

type Dict = Record<string, any>;

export default {
  variants: {
    primary: (props: Dict) => {
      return {
        background: 'primary.700',
        fontFamily: "DM Sans, Roboto, Helvetica Neue, Helvetica, Arial, sans-serif",
        _hover: {
          background: 'primary.900',
        },
      };
    },
    "nav-link": (props: Dict) => {
      const { isActive } = props;

      const hoverColor = mode("gray.900", "white")(props);
      return {
        outline: "none",
        fontWeight: "500",
        color: isActive
          ? hoverColor
          : mode("gray.700", "whiteAlpha.700")(props),
        transition: "color .2s ease-in",
        _hover: {
          textDecoration: "none",
          color: hoverColor,
        },
      };
    },
  },
};
