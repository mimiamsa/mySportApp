export type SamplePlayerData = {
  idPlayer: string;
  strThumb: string;
  strPlayer: string;
}

export const samplePlayersData: SamplePlayerData[] = [
    {
      idPlayer: '34161225',
      strThumb: 'https://www.thesportsdb.com/images/media/player/thumb/kljtns1488826630.jpg',
      strPlayer: 'Paul Scholes'
    },
    {
      idPlayer: '34172491',
      strThumb: 'https://www.thesportsdb.com/images/media/player/thumb/a9yq801600339077.jpg',
      strPlayer: 'Jack Nicklaus'
    },
    {
      idPlayer: '34165066',
      strThumb: 'https://www.thesportsdb.com/images/media/player/thumb/c8tibk1601974191.jpg',
      strPlayer: 'Josh Allen'
    },
    {
      idPlayer: '34163202',
      strThumb: 'https://www.thesportsdb.com/images/media/player/thumb/wc956y1549800890.jpg',
      strPlayer: 'Felipe Anderson'
    },
    {
      idPlayer: '34172035',
      strThumb: 'https://www.thesportsdb.com/images/media/player/thumb/nw25921596311194.jpg',
      strPlayer: 'Andy Rinomhota'
    },
    {
      idPlayer: '34172857',
      strThumb: 'https://www.thesportsdb.com/images/media/player/thumb/buwnvx1603838169.jpg',
      strPlayer: 'Michael Olise'
    },
    {
      idPlayer: '34148319',
      strThumb: 'https://www.thesportsdb.com/images/media/player/thumb/wnz7vf1609511676.jpg',
      strPlayer: 'Alessio Cragno'
    },
    {
      idPlayer: '34173339',
      strThumb: 'https://www.thesportsdb.com/images/media/player/thumb/txq4201608640795.jpg',
      strPlayer: 'Boulaye Dia'
    },
    {
      idPlayer: '34147739',
      strThumb: 'https://www.thesportsdb.com/images/media/player/thumb/r5q44m1508582653.jpg',
      strPlayer: 'Fernando Forestieri'
    },
    {
      idPlayer: '34146363',
      strThumb: 'https://www.thesportsdb.com/images/media/player/thumb/z23why1533368032.jpg',
      strPlayer: 'Andres Iniesta'
    },
    {
      idPlayer: '34163662',
      strThumb: 'https://www.thesportsdb.com/images/media/player/thumb/5392y81578228284.jpg',
      strPlayer: 'Patrik Schick'
    }
  ]


  /** 
 * This data comes from the API
 * It comes from this query https://www.thesportsdb.com/api/v1/json/1/searchloves.php?u=zag
 * then I made something like this to generate the data:
 * 
 * let promises = [];

sampleIds.forEach(id => {
  promises.push(axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=${id}`));
})

//strThumb, strPlayer, strDescriptionEN, strHeight, idPlayer
Promise.all(promises)
  .then(responses => responses)
  .then(players => {
    const arrayOfPlayer = []
    console.log(players[2].data.players[0].strPlayer)
    console.log(players[1].data.players[0].strPlayer)
    players.forEach(player => {
      arrayOfPlayer.push(player.data.players[0])
    })
    const endData = arrayOfPlayer.reduce((acc, value) => {
      const obj = {}
      obj['idPlayer'] = value.idPlayer
      obj['strThumb'] = value.strThumb
      obj['strPlayer'] = value.strPlayer
      acc.push(obj)
      return acc
    }, [])
    console.log(endData)
  })
  .catch(err => console.log(err))
 */
