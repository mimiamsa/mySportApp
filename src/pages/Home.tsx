import React from 'react'
import { Text, Spinner, Grid, Image,Flex} from "@chakra-ui/react"
import { useFetchTeams } from '../api/api'
import { AppContainer, CardLink } from '../components/LayoutComponents';


export const Home = () => {
  const { isLoading, isError, data } = useFetchTeams()


  if (isLoading) return <Spinner />
  if (isError) return <Text>an error has occured</Text>
  const teamsData = data?.teams

  return (
    <AppContainer>
      <Text lineHeight="normal" fontSize="6xl" fontWeight="bold" mb={4} textTransform="uppercase">France soccer teams</Text>
      <Grid gap={4} gridTemplateColumns="repeat(auto-fill, 250px)">
        {teamsData?.map(team => {
          return (
          <CardLink key={team.idTeam} link={`/team/${team.idTeam}`} h="350px" >
            <Text h="5%"textAlign="center" fontSize="2xl">{team.strTeam}</Text>
            <Flex alignItems="center" h="95%">
            <Image src={team.strTeamBadge}/>
            </Flex>
          </CardLink>)
        })}
      </Grid>
    </AppContainer>
  )
}


