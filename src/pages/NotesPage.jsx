// import { Box, Grid } from '@chakra-ui/react'
// import React from 'react'
// import { useSelector } from 'react-redux'
// import noteReducer from '../Redux/notes/note.reducer'

// export default function NotesPage(){
// const {loading, error, data} = useSelector((state)=>state.noteReducer)

// console.log(loading,error)

//   return (
//     <Box>
//       <Grid>

//       </Grid>

//       </Box>
//   )
// }

// NotesPage.jsx
import {
  Box,
  Button,
  Grid,
  IconButton,
  Input,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { noteReducer } from "../Redux/notes/note.reducer"; // Correct import statement
import { createNotes, getNotes } from "../Redux/notes/note.action";
import NoteCard from "../components/Notespage/NoteCard/NoteCard";
import { IoAddOutline } from "react-icons/io5";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function NotesPage() {
  const dispatch = useDispatch();
  // const {data} = useSelector((state)=>state.noteReducer)
  const { loading, error, data } = useSelector((state) => state.noteReducer);
  const [notes, setNotes] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  console.log(data);

  useEffect(() => {
    dispatch(getNotes());
  }, []);

  useEffect(() => {
    setNotes(data);
  }, [data]);

  const createNote= ()=>{
      dispatch(createNotes({title,body}))
      onClose()
  }

  return (
    <Box mt={20} padding={8}>
      <Grid
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        gap={4}
        justifyContent="space-around"
        margin={"auto"}
        w={"90%"}
      >
        {notes?.map((ele) => (
          <NoteCard {...ele} />
        ))}
      </Grid>

      <>
        <IconButton
          position={"fixed"}
          w={"80px"}
          h={"80px"}
          bg={"yellowgreen"}
          borderRadius={50}
          bottom={0}
          right={0}
          margin={16}
          onClick={onOpen}
          icon={<IoAddOutline />}
        ></IconButton>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create New Note</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}></ModalBody>

            <Textarea
              value={title}
              padding={5}
              placeholder={"Please enter title"}
              onChange={(e) => setTitle(e.target.value)}
            ></Textarea>
            <Textarea
              value={body}
              mt={8}
              padding={5}
              placeholder={"Please enter description"}
              onChange={(e) => setBody(e.target.value)}
            ></Textarea>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={createNote}>
                Create
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </Box>
  );
}
