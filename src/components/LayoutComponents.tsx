import React from 'react'
import { Link  as Rlink} from 'react-router-dom'
import { Box } from '@chakra-ui/react'

export const AppContainer: React.FC = ({ children }) => {
    return <Box p={6}>{children}</Box>
  }
 export const CardLink:React.FC<{link:string}> = ({link, children}) => {
    return <Box display="block" as={Rlink} border="1px solid black" borderRadius="base" to={link} p={4}>{children}</Box>
  }