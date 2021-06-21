import React from 'react'
import { Link as Rlink } from 'react-router-dom'
import { Box, BoxProps } from '@chakra-ui/react'

export const AppContainer: React.FC = ({ children }) => {
  return <Box p={6}>{children}</Box>
}
export const CardLink: React.FC<BoxProps & { link: string }> = ({ link, children, ...props }) => {
  return (
    <Box
      display="block"
      _hover={{ background: 'green.500', color: "white" }}
      as={Rlink}
      border="1px solid black"
      borderRadius="base"
      to={link}
      p={4}
      {...props}>
      {children}
    </Box>
  )
}