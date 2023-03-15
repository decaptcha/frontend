import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({
  borderRadius: 0, // remove border radius
  paddingX: 2, // add horizontal padding
  paddingY: 1, // add vertical padding
  fontSize: "sm", // change font size to xs
  fontWeight: "normal", // change the font weight to normal
  fontFamily: "mono", // change the font family to mono
});

// Defining a custom variant
const customVariant = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    borderColor: `${c}.500`,
    borderWidth: 2,
    borderStyle: "dashed",
    color: `${c}.500`,
    borderRadius: "4px",
    fontSize: "md",
  };
});

export const codeTheme = defineStyleConfig({
  baseStyle,
  variants: {
    custom: customVariant,
  },
  defaultProps: {
    colorScheme: "purple", // set the default color scheme to purple
  },
});
