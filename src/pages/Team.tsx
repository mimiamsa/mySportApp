import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetchTeam } from '../api/api'
import { Image, Spinner, Text, Divider, FormControl, FormLabel, Input, FormHelperText, Button } from "@chakra-ui/react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"
import { players, Players } from './teamData'
import { AppContainer } from '../components/LayoutComponents';


type paramType = { id: string }


type UpdateFormProps = {
    id: string | null; isOpen: boolean; onClose: () => void; setPlayers: React.Dispatch<React.SetStateAction<Players>>; playersState: Players
}

const UpdateForm: React.FC<UpdateFormProps> = ({ id, isOpen, onClose, playersState, setPlayers }) => {
    const playerToUpdate = playersState.find(player => id === player.idPlayer)
    const [inputValue, setInputValue] = useState<string>(playerToUpdate?.strPlayer ?? '')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(e.target.value)
    }
    const handleSubmit = () => {
        onClose()
        setPlayers(prev => prev.map(player => {
            return player.idPlayer === id ? { ...player, strPlayer: inputValue } : player
        }))
    }

    // useEffect(() => {
    //     setInputValue(playerToUpdate?.strPlayer ?? '')
    // }, [playerToUpdate?.strPlayer])
    return <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Update player</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <FormControl>
                    <FormLabel>Player name</FormLabel>
                    <Input value={inputValue} name="strPlayer" placeholder="ex. Paul Pogba" onChange={(e) => handleChange(e)} />
                </FormControl>
            </ModalBody>
            <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                    Change name
                </Button>
                <Button onClick={onClose} variant="secondary">Cancel</Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
}

export const Team = () => {
    const param: paramType = useParams()
    const { isLoading, isError, data } = useFetchTeam(param.id)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [playersState, setPlayers] = useState<Players>(players)
    const [inputValue, setInputValue] = useState<string>('')
    const [updateId, setUpdateId] = useState<string | null>(null)
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
            [...playersState, {
                idTeam: param.id,
                idPlayer: Math.floor(Math.random() * 1000).toString(),
                strPlayer: inputValue,
                strTeam: "Les girondins de bordeaux",
                strImg: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            }]
        )
        setInputValue('')
    }
    const handleUpdateModal = (id: string) => {
        onOpen()
        setUpdateId(id)
    }
    return (
        <AppContainer>
            <Image src={data?.teams[0].strTeamBadge} w={8}></Image>
            <Divider spa orientation="horizontal" />
            <Text fontSize="xl">Team</Text>
            {playersState.map(player => {
                return (<React.Fragment key={player.idPlayer}><Text>{player.strPlayer}</Text>
                    <Button onClick={() => handleDelete(player.idPlayer)}>Delete</Button>
                    <Button onClick={() => handleUpdateModal(player.idPlayer)}> update</Button>
                </React.Fragment>)
            })}

            <Divider orientation="horizontal" />
            <Text fontSize="xl">Add Player</Text>
            {/* <form onSubmit={handleSubmit}> */}
            <FormControl>
                <FormLabel>Player name</FormLabel>
                <Input value={inputValue} name="strPlayer" placeholder="ex. Paul Pogba" onChange={handleChange} />
            </FormControl>
            <Button colorScheme="green" fontWeight="normal" onClick={handleSubmit}>
                Add Player
            </Button>
            {/* </form> */}
 {/* 
 * place data in form 
 * add img input 
 * add verifications for inputs 
 * add logic for responsivness
 * make things beautiful
 * add query for team player
 * add config for tests 
 * split and reorganize the form 
 * add a modal for deletion
 * add one player view
 */}
            <UpdateForm key={updateId} id={updateId} onClose={onClose} isOpen={isOpen} setPlayers={setPlayers} playersState={playersState} />
        </AppContainer>
    )
}

