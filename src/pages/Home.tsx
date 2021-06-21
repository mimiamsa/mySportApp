import React from 'react'
import { Text, Spinner } from "@chakra-ui/react"
import { useFetchTeams } from '../api/api'
import { AppContainer, CardLink } from '../components/LayoutComponents';



export const Home = () => {
  const { isLoading, isError, data } = useFetchTeams()

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


