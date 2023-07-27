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
/* eslint-disable-next-line react/display-name */
export const DogContainer = forwardRef(
  (
    props: React.ComponentPropsWithRef<"div">,
    ref: LegacyRef<HTMLInputElement>
  ) => (
    <Box
      ref={ref}
      className="absolute right-[50%] translate-x-[50%] xl3:translate-x-0 z-20   top-[250px] md:top-[200px] lg:top-[450px]  xl2:top-[20px] xl2:right-2 xl2:translate-x-0 xl3:top-[-120px]  xl4:right-60"
    >
      {props.children}
    </Box>
  )
);
/* eslint-disable-next-line react/display-name */
const Loader = () => {
  return (
    <DogContainer>
      <DogSpinner />
    </DogContainer>
  );
};

export default Loader;
