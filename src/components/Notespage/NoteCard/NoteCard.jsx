import { CardBody, VStack ,Button, Card, Text, Flex, Heading, useDisclosure, Textarea} from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import "./style.css"
import { useDispatch } from 'react-redux'
import { deleteNotes, updateNotes } from '../../../Redux/notes/note.action'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
const NoteCard = ({title, body, user,_id}) => {
  const [notes, setNotes] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tempTitle, setTitle] = useState(title);
  const [tempBody, setBody] = useState(body);
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const dispatch = useDispatch()

  const updateNote = ()=>{
    dispatch(updateNotes(_id,{title:tempTitle,body:tempBody}))
    onClose()
  }
  return (
    <Card className='card'>
        <CardBody>
            <VStack>

                <Heading>{title}</Heading>
                <Text>{body}</Text>

                <Flex gap={2}>
                <>
       <Button onClick={onOpen}>Update</Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update Note</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}></ModalBody>

            <Textarea
              value={tempTitle}
              padding={5}
              placeholder={"Please enter title"}
              onChange={(e) => setTitle(e.target.value)}
            ></Textarea>
            <Textarea
              value={tempBody}
              mt={8}
              padding={5}
              placeholder={"Please enter description"}
              onChange={(e) => setBody(e.target.value)}
            ></Textarea>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={updateNote}>
                Update
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
                    <Button onClick={()=>{
                        dispatch(deleteNotes(_id))
                    }}>Delete</Button>
                </Flex>

            </VStack>
        </CardBody>
    </Card>
  )
}

export default NoteCard