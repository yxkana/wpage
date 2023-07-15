import { LegacyRef, forwardRef } from "react";
import { Box, Spinner } from "@chakra-ui/react";

export const DogSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);

export const DogContainer = forwardRef(
  (
    props: React.ComponentPropsWithRef<"div">,
    ref: LegacyRef<HTMLInputElement>
  ) => (
    <Box
      ref={ref}
      className="relative md:absolute  m-auto md:top-[-200px]  md:right-0 md:translate-x-0"
    >
      {props.children}
    </Box>
  )
);

const Loader = () => {
  return (
    <DogContainer>
      <DogSpinner />
    </DogContainer>
  );
};

export default Loader;
