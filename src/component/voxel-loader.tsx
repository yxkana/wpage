import { LegacyRef, forwardRef } from "react";
import { Box, Spinner } from "@chakra-ui/react";

export function ObjectLoader() {
  return (
    <div className="loading loading-spinner loading-lg absolute left-[50%] top-[50%] translate-x-[-50%] text-secondary"></div>
  );
}
/* eslint-disable-next-line react/display-name */
export const DogContainer = forwardRef(
  (
    props: React.ComponentPropsWithRef<"div">,
    ref: LegacyRef<HTMLInputElement>
  ) => (
    <Box
      ref={ref}
      className="absolute right-[50%] top-[250px] z-20 translate-x-[50%]   md:top-[200px] lg:top-[450px] xl2:right-2  xl2:top-[20px] xl2:translate-x-0 xl3:top-[-120px] xl3:translate-x-0  xl4:right-60"
    >
      {props.children}
    </Box>
  )
);
/* eslint-disable-next-line react/display-name */
const Loader = () => {
  return (
    <DogContainer>
      <ObjectLoader />
    </DogContainer>
  );
};

export default Loader;
