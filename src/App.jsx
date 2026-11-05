
import { useState } from 'react'
import useFetchData from './useFetchData.js'
import RecordCard from './RecordCard.jsx'

function App() {
  // Get the board games from my API
  const { records, loading, error } = useFetchData(
    "https://student-data-api.k-legier2012-624.workers.dev/api/v1/datasets/board-games/records?limit=20"
  )
 // Remember how many players the visitor selects
  const [playerCount, setPlayerCount] = useState(1)
  // Wait until the board game records arrive
  if (loading) {
    return <p>Loading…</p>
  }
   // Find games that support the selected number of players
    const matchingGames = records.filter((record) => {
    const minimum = Number(record["Minimum players"])
    const maximum = Number(record["Maximum players"])

    return playerCount >= minimum && playerCount <= maximum
  })

  return (
    <div>
      <h1>Find Your Perfect Board Game</h1>

      <p>
        A person planning a game night for up to six players
        needs a board game that accommodates their entire group
        because not every game supports the same number of players.
        My page will let them select their group size and display
        board games that everyone can play.
      </p>

      {/* Show any API error message */}
      <p>{error}</p>

       {/* Let visitors choose their group size */}
      <label htmlFor="players">How many people are playing? </label>

      <select
        id="players"
        value={playerCount}
        onChange={(event) => setPlayerCount(Number(event.target.value))}>
        <option value={1}>1 player</option>
        <option value={2}>2 players</option>
        <option value={3}>3 players</option>
        <option value={4}>4 players</option>
        <option value={5}>5 players</option>
        <option value={6}>6 players</option>
      </select>

      {/* Display how many games match */}
      <p>{matchingGames.length} matching games</p>

      {/* Display only games that support the selected player count */}
      {matchingGames.map((record) => (
        <RecordCard key={record.id} record={record} />
      ))}
    </div>
  )
}

export default App
