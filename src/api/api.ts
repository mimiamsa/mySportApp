import { Teams } from './type';
export const getListOfTeams = async ():Promise<Teams> => await (await fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=France')).json()
