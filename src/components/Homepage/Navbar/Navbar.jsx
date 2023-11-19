

import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LOGOUT } from '../../../Redux/users/user.types'

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {auth, token, loading, error} = useSelector((state)=>state.userReducer)
  const dispatch = useDispatch()
  const nav =useNavigate()
  return (
    <>
      <Box bg={"yellow"} px={4} top={0}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box cursor={"pointer"} onClick={()=>{nav("/")}} fontWeight={"bold"} color={"blue"}>Notes App</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button display={auth==true?"block":"none"} onClick={()=>{nav("/notes")}} bg={"lightgreen"}>All Notes</Button>
              <Button display={auth==true?"none":"block"} onClick={()=>{nav("/register")}} bg={"lightgreen"}>SignUp</Button>
              <Button display={auth==true?"none":"block"} onClick={()=>{nav("/login")}} bg={"lightgreen"}>Login</Button>
            
              <Button bg={"lightgreen"} onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem onClick={()=>{
                    dispatch({type:LOGOUT})
                  }}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}