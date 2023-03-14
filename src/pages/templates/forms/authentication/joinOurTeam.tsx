import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
} from "@chakra-ui/react";

const avatars = [
  {
    name: "Pranav Jain",
    url: "https://ca.slack-edge.com/E02RTKTNRTL-U01MAH9JHBL-8fb768625449-512",
  },
  {
    name: "Archish Thakkar",
    url: "https://ca.slack-edge.com/E02RTKTNRTL-U0104JXDETG-0b7785735109-512",
  },
  {
    name: "Roshan Nikam",
    url: "https://ca.slack-edge.com/E02RTKTNRTL-U027L09J3PH-7df7be6dea78-512",
  },
  {
    name: "Aditya Samantary",
    url: "",
  },
];

const rawHTML = `
<html>
  <head>
    <!-- <title>Bootstrap Contact Form With Captcha | Html Hints</title> -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Lato:300,400,500"
      rel="stylesheet"
      type="text/css"
    />
    <link href="custom.css" rel="stylesheet" type="text/css" />
    <link
      rel="icon"
      type="image/png"
      href="https://www.htmlhints.com/image/fav-icon.png"
    />
    <meta name="msvalidate.01" content="B7807734CA7AACC0779B341BBB766A4E" />
    <meta name="p:domain_verify" content="78ad0b4e41a4f27490d91585cb10df4a" />
    <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
        background-image: url("https://images.unsplash.com/photo-1678094947223-026bd23892db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3026&q=80");
        background-size: cover;
      }
      .modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0, 0, 0); /* Fallback color */
        background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
        -webkit-animation-name: fadeIn; /* Fade in the background */
        -webkit-animation-duration: 0.4s;
        animation-name: fadeIn;
        animation-duration: 0.4s;
      }

      /* Modal Content */
      .modal-content {
        position: fixed;
        left: 600;
        top: 100;
        overflow: auto;
        background-color: #fefefe;
        width: 30%;
        height: 50%;
        -webkit-animation-name: slideIn;
        -webkit-animation-duration: 0.4s;
        animation-name: slideIn;
        animation-duration: 0.4s;
      }

      .modal-header {
        position: relative;
        left: auto;
        top: auto;
        background-color: #fefefe;
        width: auto;
        height: auto;
        -webkit-animation-name: slideIn;
        -webkit-animation-duration: 0.4s;
        animation-name: slideIn;
        animation-duration: 0.4s;
      }

      .modal-body {
        position: relative;
        left: auto;
        top: auto;
        bottom: 20%;
        background-color: #fefefe;
        width: auto;
        height: auto;
        -webkit-animation-name: slideIn;
        -webkit-animation-duration: 0.4s;
        animation-name: slideIn;
        animation-duration: 0.4s;
      }

      /* The Close Button */
      .close {
        color: white;
        float: right;
        font-size: 28px;
        font-weight: bold;
      }

      .close:hover,
      .close:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
      }

      .highlighted {
        border: 2px solid #b404ae;
        background-image: url("./tick.png");
      }
      #textbox span {
        bottom: 50px;
        color: #0f0;
        left: auto;
        position: relative;
        display: none;
        border: none;
      }
      #textbox span.highlighted {
        display: inline;
      }

      /* Add Animation */
      @-webkit-keyframes slideIn {
        from {
          bottom: -300px;
          opacity: 0;
        }
        to {
          bottom: 0;
          opacity: 1;
        }
      }

      @keyframes slideIn {
        from {
          bottom: -300px;
          opacity: 0;
        }
        to {
          bottom: 0;
          opacity: 1;
        }
      }

      @-webkit-keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    </style>

    <link
      rel="stylesheet"
      type="text/css"
      href="https://www.gstatic.com/recaptcha/releases/8G7OPK94bhCRbT0VqyEVpQNj/styles__ltr.css"
    />
    <script nonce="42fioSZ-ENSemNlOBMF-KQ" type="text/javascript">
      window["__recaptcha_api"] = "https://www.google.com/recaptcha/api2/";
    </script>
    <script
      type="text/javascript"
      src="https://www.gstatic.com/recaptcha/releases/8G7OPK94bhCRbT0VqyEVpQNj/recaptcha__en.js"
      nonce="42fioSZ-ENSemNlOBMF-KQ"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "UA-145078782-1");
    </script>
    <style>
      .list-unstyled {
        color: red;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <div class="row">
        <div class="col-xl-8 offset-xl-2">
          <form id="contact-form" role="form">
            <div class="messages"></div>

            <div class="controls">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label
                      for="form_name"
                      style="color: antiquewhite; position: relative; top: 50px"
                      >Firstname *</label
                    >
                    <input
                      id="form_name"
                      style="
                        background-color: beige;
                        position: relative;
                        top: 50px;
                      "
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="Please enter your firstname *"
                      required="required"
                      data-error="Firstname is required."
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label
                      for="form_email"
                      style="color: antiquewhite; position: relative; top: 50px"
                      >Email *</label
                    >
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label
                      for="form_phone"
                      style="color: antiquewhite; position: relative; top: 50px"
                      >Phone</label
                    >
                    <input
                      id="form_phone"
                      style="
                        background-color: beige;
                        position: relative;
                        top: 50px;
                      "
                      type="tel"
                      name="phone"
                      class="form-control"
                      placeholder="Please enter your phone"
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
              </div>
              
              <div class="form-group">
                <div
                  class="g-recaptcha"
                  data-sitekey="6Ld349AkAAAAAKuq264rNlR4bSyKrbGUls9mSvhp"
                ></div>
                <input
                  class="form-control d-none"
                  data-recaptcha="true"
                  required
                  data-error="Please complete the Captcha"
                />
                <div class="help-block with-errors"></div>
              </div>
            </div>
            <div class="decaptcha" data-sitekey="920310e1-eb98-4cbf-bfa1-97c90e8baf44"></div>

          </form>
        </div>
      </div>
    </div>
    
  </body>
</html>

`;

export default function JoinOurTeam() {
  return (
    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          >
            deCaptcha Demo{" "}
            <Text
              as={"span"}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >
              for developers &
            </Text>{" "}
            for you!
          </Heading>
          <Stack direction={"row"} spacing={4} align={"center"}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  size={useBreakpointValue({ base: "md", md: "lg" })}
                  position={"relative"}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: "full",
                    height: "full",
                    rounded: "full",
                    transform: "scale(1.125)",
                    bgGradient: "linear(to-bl, red.400,pink.400)",
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={"heading"} fontSize={{ base: "4xl", md: "6xl" }}>
              +
            </Text>
            <Flex
              align={"center"}
              justify={"center"}
              fontFamily={"heading"}
              fontSize={{ base: "sm", md: "lg" }}
              bg={"gray.800"}
              color={"white"}
              rounded={"full"}
              minWidth={useBreakpointValue({ base: "44px", md: "60px" })}
              minHeight={useBreakpointValue({ base: "44px", md: "60px" })}
              position={"relative"}
              _before={{
                content: '""',
                width: "full",
                height: "full",
                rounded: "full",
                transform: "scale(1.125)",
                bgGradient: "linear(to-bl, orange.400,yellow.400)",
                position: "absolute",
                zIndex: -1,
                top: 0,
                left: 0,
              }}
            >
              YOU
            </Flex>
          </Stack>
        </Stack>
        <Stack
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Join our team
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              We’re looking for amazing engineers just like you! Become a part
              of our rockstar engineering team and skyrocket your career!
            </Text>
          </Stack>
          <Box as={"form"} mt={10}>
            <Stack spacing={4}>
              <Input
                placeholder="Firstname"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Input
                placeholder="firstname@lastname.io"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Input
                placeholder="+1 (___) __-___-___"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              
            </Stack>
            <Button
              fontFamily={"heading"}
              mt={8}
              w={"full"}
              bgGradient="linear(to-r, red.400,pink.400)"
              color={"white"}
              _hover={{
                bgGradient: "linear(to-r, red.400,pink.400)",
                boxShadow: "xl",
              }}
            >
              Submit
            </Button>
          </Box>
          form
        </Stack>
      </Container>
      <Blur
        position={"absolute"}
        top={-10}
        left={-10}
        style={{ filter: "blur(70px)" }}
      />
    </Box>
  );
}

export const Blur = (props: IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};
