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
      className="absolute right-[50%] translate-x-[50%] xl3:translate-x-0 z-20   top-[200px] xl2:top-[-130px] xl2:right-2 xl2:translate-x-0   xl3:top-[-130px] xl3:right-2 xl4:right-60"
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
