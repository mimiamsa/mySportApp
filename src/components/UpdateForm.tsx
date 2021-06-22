import React from 'react'
import { useState } from 'react'
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react"
import { SamplePlayerData } from '../api/playersData';

type UpdateFormProps = {
    id: string | null; 
    isOpen: boolean; 
    onClose: () => void; 
    setPlayers: React.Dispatch<React.SetStateAction<SamplePlayerData[]>>; 
    playersState: SamplePlayerData[]
}

export const UpdateForm: React.FC<UpdateFormProps> = ({ id, isOpen, onClose, playersState, setPlayers }) => {
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
