
function RecordCard({ record }) {
  return (
    <article>
      <h2>{record.Name}</h2>
      <p>{record["Minimum players"]} to {record["Maximum players"]} players</p>
    </article>
  )
}

export default RecordCard
