import React from 'react'
import { useQuery } from 'react-query';
import { Text, Box, Spinner } from "@chakra-ui/react"
import { getListOfTeams } from '../api/api'
import { Teams } from '../api/type';

const AppContainer: React.FC = ({ children }) => {
  return <Box p={6}>{children}</Box>
}

export const Home = () => {
  const { isLoading, error, data } = useQuery<Teams>('listTeams', getListOfTeams)
  if (isLoading) return <Spinner />
  if (error) return <Text>an error has occured</Text>
  const teamsData = data?.teams
  console.log(teamsData)
  // console.log(teams)
  return (
    <AppContainer>
      <Text fontSize="4xl" fontWeight="bold">This is home </Text>
     {teamsData?.map(value => {
       return <Text>{value.strAlternate}</Text>
     })}
     {/* @todo : link to page team detail pass team id in url 
     ** create route by team by id 

     */}
    </AppContainer>
  )
}
