import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function VideoBackground() {
  const [poster, setPoster] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      document.getElementById("videoBackground").autoplay = false;
      setPoster(true);
    }
    window.onresize = () => {
      if (window.innerWidth <= 768) {
        document.getElementById("videoBackground").autoplay = false;
        document.getElementById("videoBackground").pause();
      } else {
        setPoster(false);
      }
    };
  }, []);

  return (
    <>
      {!poster && (
        <Box
          w="100%"
          h="100vh"
          as="video"
          id="videoBackground"
          display={{ base: "none", md: "block" }}
          autoPlay={true}
          loop
          zIndex="-1"
          position="fixed"
          controls={false}
          muted
          src=""
          objectFit="cover"
        />
      )}
      {poster && (
        <Box
        w="100%"
        h="100vh"
        as="video"
        id="videoBackground"
        display={{ base: "none", md: "block" }}
        autoPlay={true}
        loop
        zIndex="-1"
        position="fixed"
        controls={false}
        muted
        src=""
        objectFit="cover"
        />
      )}
    </>
  );
}