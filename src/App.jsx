
import useFetchData from './useFetchData.js'
import RecordCard from './RecordCard.jsx'

function App() {
  // Get the first 20 board games from your API
  const { records, loading, error } = useFetchData(
    "https://student-data-api.k-legier2012-624.workers.dev/api/v1/datasets/board-games/records?limit=20"
  )

  // Show a loading message while waiting for the API
  if (loading) {
    return <p>Loading…</p>
  }

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

      {/* Display the first two board games */}
      <RecordCard record={records[0]} />
      <RecordCard record={records[1]} />
    </div>
  )
}

export default App
