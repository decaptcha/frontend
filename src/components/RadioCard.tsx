import React from "react";
import {
  Box,
  useRadio,
  UseRadioProps,
  useColorModeValue,
} from "@chakra-ui/react";

type RadioCardProps = {
  children: React.ReactNode;
} & UseRadioProps;

const RadioCard: React.VFC<RadioCardProps> = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: useColorModeValue("purple.500", "purple.900"),
          color: "white",
          borderColor: useColorModeValue("purple.500", "purple.900"),
        }}
        _focus={{
          boxShadow: "outline",
        }}
        p={1.5}
      >
        {props.children}
      </Box>
    </Box>
  );
};
export default RadioCard;
