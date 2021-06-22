import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Link as RLink, useParams } from 'react-router-dom'
import { FaArrowCircleLeft, FaEdit, FaRegEye, FaTrash } from 'react-icons/fa';

import { useFetchTeam } from '../api/api'

import { Flex, Link, Image, Spinner, Text, Divider, FormControl, FormLabel, Input, Button, Box, IconButton, Grid } from "@chakra-ui/react"


import { useDisclosure, chakra } from "@chakra-ui/react"
import { AppContainer, PlayerRow } from '../components/LayoutComponents';
import { SamplePlayerData, samplePlayersData } from '../api/playersData';
import { UpdateForm } from '../components/UpdateForm';
import { PlayerDetailModal } from '../components/PlayerDetailModal';


type RouteParams = {
    id: string;
}

export type FormState = {
    strPlayer: string, 
    strThumb?: string
}
export const Team = () => {
    const param = useParams<RouteParams>()
    const { isLoading, isError, data } = useFetchTeam(param.id)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen:isOpenDetail, onOpen:onOpenDetail, onClose: onCloseDetail } = useDisclosure()

    const [playersState, setPlayers] = useState<SamplePlayerData[]>(samplePlayersData)
    const [formValue, setformValue] = useState<FormState>({ strPlayer: "", strThumb: "" })
    const [playerId, setPlayerId] = useState<string | null>(null)

    if (isLoading) {
        return <Spinner />
    }
    if (isError) {
        return <Text>There was an error while fetching the team data</Text>
    }
    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setformValue({ ...formValue, strPlayer: e.target.value })
    }
    const handleChangeImage= (e: React.ChangeEvent<HTMLInputElement>): void => {
        setformValue({ ...formValue, strThumb: e.target.value })
    }
    const handleDelete = (id: string) => {
        const removePlayer = [...playersState].filter(player => player.idPlayer !== id)
        setPlayers(removePlayer)
    }
    const handleSubmit = (): void => {
        setPlayers(
            [{
                idPlayer: uuidv4(),
                strPlayer: formValue.strPlayer,
                strThumb: formValue.strThumb || "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            },
            ...playersState]
        )
        setformValue({ ...formValue, strPlayer: "" , strThumb: ""})
    }
    const handleUpdateModal = (id: string) => {
        onOpen()
        setPlayerId(id)
    }

    const handleSeeDetail = (id: string): void => {
        onOpenDetail()
        setPlayerId(id)
    }

    return (
        <AppContainer>
            <Link as={RLink} to="/" d="flex" alignItems="center">
                <Box mr={1} as={FaArrowCircleLeft} />
                <chakra.span>Back to team list </chakra.span>
            </Link>
            <Divider my={4} orientation="horizontal" />

            <Flex>
                <Image src={data?.teams[0].strTeamBadge} w={8} mr={3} />
                <Text fontSize="2xl">{data?.teams[0].strTeam} team players</Text>
            </Flex>
            <Divider my={4} orientation="horizontal" />
            <Grid gap={6} gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}>
                <div>
                    <Text mb={4} fontSize="xl">Add a Player to the team</Text>
                    <FormControl>
                        <FormLabel>Player name</FormLabel>
                        {/* @todo: fix 
                        *I added custom Ids to fix a warning in the console (chakra generates non unique ids form the inputs)
                        * but a better fix must exist 
                        */}
                        <Input id={formValue.strPlayer} mb={4} value={formValue.strPlayer} name="strPlayer" placeholder="ex. Paul Pogba" onChange={handleChangeName} />
                        <FormLabel>Player photo</FormLabel>
                        <Input id={formValue.strThumb} value={formValue.strThumb} name="strThumb" placeholder="add photo URL" onChange={handleChangeImage} />
                    </FormControl>
                    <Button mt={4} colorScheme="green" fontWeight="normal" onClick={handleSubmit}>
                        Add Player
                    </Button>
                </div>
                <div>
                    <Text mb={4} fontSize="xl">Players list</Text>
                    {playersState.map(player => {
                        return (
                            <PlayerRow key={player.idPlayer}>
                                <Flex alignItems="center" justifyContent="space-between">
                                    <Flex alignItems="center">
                                        <Box w={16} h={16} mr={3}>
                                        <Image w="100%" h="100%" objectFit="cover" mr={3}  src={player.strThumb} borderRadius="50%" />
                                        </Box>
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
            </Grid>
            <UpdateForm key={playerId} id={playerId} onClose={onClose} isOpen={isOpen} setPlayers={setPlayers} playersState={playersState} />
            <PlayerDetailModal playerId={playerId} onCloseDetail={onCloseDetail} isOpenDetail={isOpenDetail} />
        </AppContainer>
    )
}

