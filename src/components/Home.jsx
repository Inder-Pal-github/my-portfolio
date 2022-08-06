import {
  Box,
  Button,
  Circle,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import "../App.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import profile from "../components/images/Profilee.png";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Profile from "./Profile";
const Home = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("mid-width:600px");
  const navigate = useNavigate();
  const direction = useBreakpointValue({
    sm: "column",
    md: "column",
    lg: "row",
    xl: "row",
  });
  return (
    <div className="scrollSnapMain">
      <div className="scrollSnapChild">
        <Circle
          position="absolute"
          left="100px"
          bg="blue.100"
          opacity="0.1"
          w="300px"
          h="300px"
          alignSelf="flex-end"
        />
        <Box
          display="flex"
          width="100%"
          justifyContent="space-between"
          flexDirection={direction}
          alignItems="center"
          spacing="200px"
          p={isNotSmallerScreen ? "32" : "0"}
          alignSelf="flex-start"
        >
          <Box
            flex="1"
            textAlign="center"
            mt={isNotSmallerScreen ? "0" : "16"}
            align="flex-start"
          >
            <Text fontSize="5xl" fontWeight="semibold">
              HI ,I am
            </Text>
            <div className="nameAniMain">
              <div className="nameAni flipAnim ">
                <Text
                  fontSize="7xl"
                  fontWeight="bold"
                  bgGradient="linear(to-r,cyan.400,blue.500,purple.600)"
                  bgClip="text"
                >
                  Inder Pal
                </Text>
              </div>
              <div className="profAni flipAnim ">
                <Heading>Full Stack Web Developer</Heading>
              </div>
            </div>
            <Text color={isDark ? "gray.200" : "gray.500"}></Text>
            <Button
              mt={8}
              colorScheme="blue"
              onClick={() => navigate("/resume")}
            >
              Resume
            </Button>
          </Box>
          <Box flex="1">
            <Image
              alignSelf="center"
              mt={isNotSmallerScreen ? "0" : "12"}
              mb={isNotSmallerScreen ? "0" : "12"}
              borderRadius="full"
              backgroundColor="transparent"
              boxShadow="lg"
              boxSize="300px"
              src={profile}
              zIndex="1"
            />
          </Box>
        </Box>
      </div>
      <div className="scrollSnapChild">
        <Skills />
      </div>
      <div className="scrollSnapChild">
        <Projects />
      </div>
      <div className="scrollSnapChild">
        <Profile />
      </div>
    </div>
  );
};

export default Home;
