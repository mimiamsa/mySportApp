import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetchTeam } from '../api/api'
import { Image, Spinner, Text, Divider, Stack, FormControl, FormLabel, Input, FormHelperText, Button } from "@chakra-ui/react"
// import { getTeamById } from '../api/api'
// import { Team } from '../api/type'
type paramType = { id: string }


type SamplePlayer = {
    idTeam: string
    // idPlayer: string
    strPlayer: string
    strTeam: string
    strImg: string
}
type Players = {
    players: SamplePlayer[]
}

const players: Players = {
    players: [
        {
            idTeam: "1",
            // idPlayer: "01",
            strPlayer: "Benoît Costil",
            strTeam: "Les girondins de bordeaux",
            strImg: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
        },
        {
            idTeam: "2",
            // idPlayer: "02",
            strPlayer: "Yacine Adli",
            strTeam: "Les girondins de bordeaux",
            strImg: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"

        },
        {
            idTeam: "3",
            // idPlayer: "03",
            strPlayer: "Thomas Carrique",
            strTeam: "Les girondins de bordeaux",
            strImg: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"

        }

    ]
}

export const Team = () => {
    const param: paramType = useParams()
    const { isLoading, isError, data } = useFetchTeam(param.id)
    const [playersState, setPlayers] = useState<Players>(players)
    const [inputValue, setInputValue] = useState<string>('')
    if (isLoading) {
        return <Spinner />
    }
    if (isError) {
        return <Text>There was an error while fetching the team data</Text>
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (): void => {
        setPlayers({
            players: [...playersState.players, {
                idTeam: param.id,
                // idPlayer: "01", // generate random key
                strPlayer: inputValue,
                strTeam: "Les girondins de bordeaux",
                strImg: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            }]
        })
        setInputValue('')
        console.log(playersState)
    }
    return (
        <Stack>
            <Image src={data?.teams[0].strTeamBadge} w={8}></Image>
            <Divider orientation="horizontal" />
            <Text fontSize="xl">Add Player</Text>
            <FormControl id="email">
                <FormLabel>Player name</FormLabel>
                <Input value={inputValue} name="strPlayer" placeholder="ex. Paul Pogba" onChange={(e) => handleChange(e)} />

            </FormControl>
            <Button colorScheme="green" fontWeight="normal" onClick={() => handleSubmit()}>Add Player</Button>
        </Stack>
    )
}

