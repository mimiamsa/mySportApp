import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Spinner,
    Text,
    Image,
    Box
} from "@chakra-ui/react"
import { useFetchOnePlayer } from '../api/api'
import { samplePlayersData } from '../api/playersData'

type PlayerDetailModalProps = {
    isOpenDetail: boolean;
    onCloseDetail: () => void;
    playerId: string | null
}
export const PlayerDetailModal: React.FC<PlayerDetailModalProps> = ({ isOpenDetail, onCloseDetail, playerId }) => {
    const { isLoading: playerLoading, data: playerById } = useFetchOnePlayer(playerId ?? '')
    const player = playerById?.players[0]
    const isOriginalData = samplePlayersData.some(player => player.idPlayer === playerId)

    return (
        <Modal isOpen={isOpenDetail} onClose={onCloseDetail}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{player?.strPlayer}</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={8}>
                    {isOriginalData ?
                        <>
                            {playerLoading && <Spinner />}
                            {player?.strThumb && <Image mb={4} src={player?.strThumb} />}
                            <Box h="200px" overflow="auto">{player?.strDescriptionEN}</Box>
                        </> :
                        <Text>No data found</Text>
                    }
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

