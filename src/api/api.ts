import { useQuery } from "react-query";
import {  Players, Teams } from "./type";

const fetchTeams = async (): Promise<Teams> =>
  await (
    await fetch(
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=France"
    )
  ).json();

export const useFetchTeams = () => {
  return useQuery<Teams>("listTeams", fetchTeams);
};

const fetchTeamById = async (teamId: string): Promise<Teams> =>
  await (
    await fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
    )
  ).json();

export const useFetchTeam = (id: string) => {
  return useQuery(["teamById", id], () => fetchTeamById(id));
};

const fetchOnePlayer = async (playerId: string): Promise<Players> =>
  await (
    await fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=${playerId}`
    )
  ).json();

  
  export const useFetchOnePlayer = (id: string) => {
    return useQuery(["playerById", id], () => fetchOnePlayer(id));
  };


const fetchAllPlayersFromTeam = async (teamName: string): Promise<Players> =>
  await (
    await fetch(
      `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=${teamName}`
    )
  ).json();

  export const useFetchAllPlayers = (name:string) => {
    return useQuery(["allPlayers", name], () => fetchAllPlayersFromTeam(name));
  }

