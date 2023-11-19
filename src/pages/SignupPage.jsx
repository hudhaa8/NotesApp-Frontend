import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { getUser } from "../Redux/users/user.action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../constants/config";
// const SignupPage = () => {
//   const nav =useNavigate()
//   const {auth, token, loading, error} = useSelector((state)=>state.userReducer)
//   console.log(auth,token)
//   if(auth){
//     nav("/notes")
//   }
//   const [name,setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch()
//   const handleLogin =()=>{
//       dispatch(getUser({email,password}))
//   }

//   return (
//     <Flex
//       minH={"100vh"}
//       align={"center"}
//       justify={"center"}
//       bg={useColorModeValue("gray.50", "gray.800")}
//     >
//       <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
//         <Stack align={"center"}>
//           <Heading fontSize={"4xl"}>Sign in to your account</Heading>
//           <Text fontSize={"lg"} color={"gray.600"}>
//             to enjoy all of our cool <Text color={"blue.400"}>features</Text> ✌️
//           </Text>
//         </Stack>
//         <Box
//           rounded={"lg"}
//           bg={useColorModeValue("white", "gray.700")}
//           boxShadow={"lg"}
//           p={8}
//         >
//           <Stack spacing={4}>
        
//           <FormControl id="name">
//               <FormLabel>Name</FormLabel>
//               <Input
//                 type="text"
//                 value={name}
//                 onChange={(e) => {
//                   setName(e.target.value);
//                 }}
//               />
              

//             <FormControl id="email">
//               <FormLabel>Email address</FormLabel>
//               <Input
//                 type="email"
//                 value={email}
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                 }}
//               />

              
//             </FormControl>
//             <FormControl id="password">
//               <FormLabel>Password</FormLabel>
//               <Input
//                 type="password"
//                 value={password}
//                 onChange={(e) => {
//                   setPassword(e.target.value);
//                 }}
//               />
//             </FormControl>
//             <Stack spacing={10}>
//               <Stack
//                 direction={{ base: "column", sm: "row" }}
//                 align={"start"}
//                 justify={"space-between"}
//               >
//                 <Checkbox>Remember me</Checkbox>
//                 <Text color={"blue.400"}>Forgot password?</Text>
//               </Stack>
//               <Button
//                 onClick={handleLogin}
//                 bg={"blue.400"}
//                 color={"white"}
//                 _hover={{
//                   bg: "blue.500",
//                 }}
//               >
//                 Sign in
//               </Button>
//             </Stack>
//           </Stack>
//         </Box>
//       </Stack>
//     </Flex>
//   );
// };




// export default SignupPage



// ... (your imports)

const SignupPage = () => {
  const nav = useNavigate();
  const { auth, token } = useSelector((state) => state.userReducer);
  

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async() => {
      let data = await axios.post(BASE_URL+"/user/register",{
        name,email,password
      })
      let {message, status} = data.data
      if(status==1){
        alert(message)
        nav("/login")
      }else{
        alert(message)
      }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Signup with Notes App</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Text color={"blue.400"}>features</Text> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </FormControl>

            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </FormControl>

            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                
              </Stack>
              <Button
                onClick={handleSignUp}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                aria-label="Sign in"
              >
                Sign up
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignupPage;
