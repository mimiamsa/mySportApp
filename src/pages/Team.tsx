import React, { useState } from 'react'

import { Link as RLink, useParams } from 'react-router-dom'
import { FaArrowCircleLeft, FaEdit, FaRegEye, FaTrash } from 'react-icons/fa';

import { useFetchOnePlayer, useFetchTeam } from '../api/api'

import { Flex, Link, Image, Spinner, Text, Divider, FormControl, FormLabel, Input, Button, Box, IconButton, Grid } from "@chakra-ui/react"


import { useDisclosure, chakra } from "@chakra-ui/react"
import { AppContainer, PlayerRow } from '../components/LayoutComponents';
import { SamplePlayerData, samplePlayersData } from '../api/playersData';
import { UpdateForm } from '../components/UpdateForm';


type RouteParams = {
    id: string;
};

export const Team = () => {
    const param: RouteParams = useParams()
    const { isLoading, isError, data } = useFetchTeam(param.id)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [playersState, setPlayers] = useState<SamplePlayerData[]>(samplePlayersData)
    const [inputValue, setInputValue] = useState<string>('')
    const [updateId, setUpdateId] = useState<string | null>(null)
    const { isLoading: playerLoading, data: playerById } = useFetchOnePlayer(updateId ?? '')

    if (isLoading) {
        return <Spinner />
    }
    if (isError) {
        return <Text>There was an error while fetching the team data</Text>
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(e.target.value)
    }
    const handleDelete = (id: string) => {
        const removePlayer = [...playersState].filter(player => player.idPlayer !== id)
        setPlayers(removePlayer)
    }
    const handleSubmit = (): void => {
        setPlayers(
            [{
                idPlayer: Math.floor(Math.random() * 1000).toString(),
                strPlayer: inputValue,
                strThumb: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            },
            ...playersState]
        )
        setInputValue('')
    }
    const handleUpdateModal = (id: string) => {
        onOpen()
        setUpdateId(id)
    }

    const handleSeeDetail = (id: string): void => {
        setUpdateId(id)
        console.log(playerById)
    }

    return (
        <AppContainer>
            <Link as={RLink} to="/" d="flex" alignItems="center">
                <Box mr={1} as={FaArrowCircleLeft} />
                <chakra.span>Back to team list </chakra.span>
            </Link>

            <Divider my={4} spa orientation="horizontal" />

            <Flex>
                <Image src={data?.teams[0].strTeamBadge} w={8} mr={3} />
                <Text fontSize="2xl">{data?.teams[0].strTeam} team players</Text>
            </Flex>

            <Divider my={4} spa orientation="horizontal" />
            <Grid gap={6} gridTemplateColumns="1fr 1fr">
                <div>
                    <Text mb={4} fontSize="xl">Players list</Text>

                    {playersState.map(player => {
                        return (
                            <PlayerRow key={player.idPlayer}>
                                <Flex alignItems="center" justifyContent="space-between">
                                    <Flex alignItems="center">
                                        <Image mr={3} w={16} src={player.strThumb} borderRadius="50%" />
                                        <Text>{player.strPlayer}</Text>
                                    </Flex>
                                    <div>
                                        <IconButton mr={3} borderRadius="base" size="sm" aria-label="delete" icon={<Box as={FaRegEye} />} onClick={() => handleSeeDetail(player.idPlayer)} />
                                        <IconButton mr={3} borderRadius="base" size="sm" aria-label="delete" icon={<Box as={FaEdit} />} onClick={() => handleUpdateModal(player.idPlayer)} />
                                        <IconButton borderRadius="base" size="sm" aria-label="delete" icon={<Box as={FaTrash} />} onClick={() => handleDelete(player.idPlayer)} />

                                    </div>
                                </Flex>
                            </PlayerRow>)
                    })}
                </div>
                <Box>
                    <Text mb={4} fontSize="xl">Add a Player to the team</Text>
                    {/* <form onSubmit={handleSubmit}> */}
                    <FormControl>
                        <FormLabel>Player name</FormLabel>
                        <Input value={inputValue} name="strPlayer" placeholder="ex. Paul Pogba" onChange={handleChange} />
                    </FormControl>
                    <Button mt={4} colorScheme="green" fontWeight="normal" onClick={handleSubmit}>
                        Add Player
                    </Button>

                    {/* </form> */}
                </Box>
            </Grid>
            <UpdateForm key={updateId} id={updateId} onClose={onClose} isOpen={isOpen} setPlayers={setPlayers} playersState={playersState} />
        </AppContainer>
    )
}

