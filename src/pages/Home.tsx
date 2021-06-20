import React from 'react'
import { Link  as Rlink} from 'react-router-dom'
import { Text, Box, Spinner, Link } from "@chakra-ui/react"
import { useFetchTeams } from '../api/api'


const AppContainer: React.FC = ({ children }) => {
  return <Box p={6}>{children}</Box>
}
const CardLink:React.FC<{link:string}> = ({link, children}) => {
  return <Box display="block" as={Rlink} border="1px solid black" borderRadius="base" to={link} p={4}>{children}</Box>
}
export const Home = () => {
  const {isLoading, isError, data } = useFetchTeams()

  if (isLoading) return <Spinner />
  if (isError) return <Text>an error has occured</Text>
  const teamsData = data?.teams

  return (
    <AppContainer>
      <Text fontSize="4xl" fontWeight="bold">France soccer teams</Text>
      {teamsData?.map(team => {
        return <CardLink key={team.idTeam} link={`/team/${team.idTeam}`}>{team.strTeam}</CardLink>
      })}
    </AppContainer>
  )
}


