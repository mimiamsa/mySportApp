import React from 'react'
import { Link as Rlink } from 'react-router-dom'
import { Box, BoxProps } from '@chakra-ui/react'

export const AppContainer: React.FC = ({ children }) => {
  return <Box p={6}>{children}</Box>
}
export const CardLink: React.FC<BoxProps & { link: string }> = ({ link, children, ...props }) => {
  return (
    <Box
      background="gray.50"
      display="block"
      _hover={{ background: 'black', color: "white" }}
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

export const PlayerRow: React.FC = ({ children }) => {
  return <Box borderBottom="1px solid" p={4}>{children}</Box>
}