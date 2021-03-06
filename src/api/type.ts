/**
 * I added '| null' for almost each value except for the object id 
 * because I was not sure which value is never null
 */
export type TeamData = {
  idTeam: string;
  idSoccerXML: string | null;
  idAPIfootball: string | null;
  intLoved: string | null;
  strTeam: string | null;
  strTeamShort: string | null;
  strAlternate: string | null;
  intFormedYear: string | null;
  strSport: string | null;
  strLeague: string | null;
  idLeague: string | null;
  strLeague2: string | null;
  idLeague2: string | null;
  strLeague3: string | null;
  idLeague3: string | null;
  strLeague4: string | null;
  idLeague4: string | null;
  strLeague5: string | null;
  idLeague5: string | null;
  strLeague6: string | null;
  idLeague6: string | null;
  strLeague7: string | null;
  idLeague7: string | null;
  strDivision: string | null;
  strManager: string | null;
  strStadium: string | null;
  strKeywords: string | null;
  strRSS: string | null;
  strStadiumThumb: string | null;
  strStadiumDescription: string | null;
  strStadiumLocation: string | null;
  intStadiumCapacity: string | null;
  strWebsite: string | null;
  strFacebook: string | null;
  strTwitter: string | null;
  strInstagram: string | null;
  strDescriptionEN: string | null;
  strDescriptionDE: string | null;
  strDescriptionFR: string | null;
  strDescriptionCN: string | null;
  strDescriptionIT: string | null;
  strDescriptionJP: string | null;
  strDescriptionRU: string | null;
  strDescriptionES: string | null;
  strDescriptionPT: string | null;
  strDescriptionSE: string | null;
  strDescriptionNL: string | null;
  strDescriptionHU: string | null;
  strDescriptionNO: string | null;
  strDescriptionIL: string | null;
  strDescriptionPL: string | null;
  strGender: string | null;
  strCountry: string | null;
  strTeamBadge: string;
  strTeamJersey: string | null;
  strTeamLogo: string | null;
  strTeamFanart1: string | null;
  strTeamFanart2: string | null;
  strTeamFanart3: string | null;
  strTeamFanart4: string | null;
  strTeamBanner: string | null;
  strYoutube: string | null;
  strLocked: string | null;
};

/**
 * Typing for several teams/players works for also works for one team/player
 * the API alway returns an object with an array of object(s)
 */
export type Teams = {
  teams: TeamData[];
};

export type APIPlayerData = {
  idTeam: string;
  idPlayer: string;
  idTeam2: string | null;
  idTeamNational: string | null;
  idSoccerXML: string | null;
  idAPIfootball: string | null;
  idPlayerManager: string | null;
  strPlayer: string | null;
  strNationality: string | null;
  strTeam: string | null;
  strTeam2: string | null;
  strSport: string | null;
  intSoccerXMLTeamID: string | null;
  dateBorn: string | null;
  strNumber: string | null;
  dateSigned: string | null;
  strSigning: string | null;
  strWage: string | null;
  strOutfitter: string | null;
  strKit: string | null;
  strAgent: string | null;
  strBirthLocation: string | null;
  strDescriptionEN: string | null;
  strDescriptionDE: string | null;
  strDescriptionFR: string | null;
  strDescriptionCN: string | null;
  strDescriptionIT: string | null;
  strDescriptionJP: string | null;
  strDescriptionRU: string | null;
  strDescriptionES: string | null;
  strDescriptionPT: string | null;
  strDescriptionSE: string | null;
  strDescriptionNL: string | null;
  strDescriptionHU: string | null;
  strDescriptionNO: string | null;
  strDescriptionIL: string | null;
  strDescriptionPL: string | null;
  strGender: string | null;
  strSide: string | null;
  strPosition: string | null;
  strCollege: string | null;
  strFacebook: string | null;
  strWebsite: string | null;
  strTwitter: string | null;
  strInstagram: string | null;
  strYoutube: string | null;
  strHeight: string | null;
  strWeight: string | null;
  intLoved: string | null;
  strThumb: string | null;
  strCutout: string | null;
  strRender: string | null;
  strBanner: string | null;
  strFanart1: string | null;
  strFanart2: string | null;
  strFanart3: string | null;
  strFanart4: string | null;
  strCreativeCommons: string | null;
  strLocked: string | null;
};


export type Players = {
  players: APIPlayerData[];
};


