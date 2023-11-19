
import React from 'react';
import { Navbar } from '../components/Homepage/Navbar';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import note from '../assets/note.jpg';

const HomePage = () => {
  return (
    <Box padding={4}>
      <Heading padding={4} textAlign={'center'} size={'2xl'}>
        Notes Taking App
      </Heading>
      <Text>
        Welcome to my Notes Taking Application where innovation meets simplicity to revolutionize the way you take notes.
        Unleash the full potential of your ideas, inspirations, and to-dos with our cutting-edge notes app designed for
        ultimate productivity.Our notes app boasts a sleek and user-friendly interface that ensures a seamless
        note-taking experience. With a minimalist design, navigating through your thoughts has never been more
        effortless.Access your notes anytime, anywhere. Our app seamlessly syncs across all your devices, ensuring your
        notes are at your fingertips whether you're at your desk, on the go, or lounging at home.Say goodbye to clutter!
        Find what you need in seconds and keep your ideas neatly organized.Personalize your note-taking experience with
        customizable themes. Choose the color scheme that resonates with your style and enjoy a visually pleasing
        environment tailored to your preferences.
      </Text>
    </Box>
  );
};

export default HomePage;


