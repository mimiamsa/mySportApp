export type SamplePlayer = {
    idTeam: string
    idPlayer: string
    strPlayer: string
    strTeam: string
    strImg: string
}

export type Players = SamplePlayer[]

export const players: Players = [
    {
        idTeam: "1",
        idPlayer: "01",
        strPlayer: "Benoît Costil",
        strTeam: "Les girondins de bordeaux",
        strImg: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
    },
    {
        idTeam: "2",
        idPlayer: "02",
        strPlayer: "Yacine Adli",
        strTeam: "Les girondins de bordeaux",
        strImg: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"

    },
    {
        idTeam: "3",
        idPlayer: "03",
        strPlayer: "Thomas Carrique",
        strTeam: "Les girondins de bordeaux",
        strImg: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"

    }

]