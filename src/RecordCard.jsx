
function RecordCard({ record, onShowDetails }) {
  return (
    <article>
      <h2>{record.Name}</h2>
      <p>{record["Minimum players"]} to {record["Maximum players"]} players</p>

       {/* Tell App which game the visitor selected */}
      <button onClick={() => onShowDetails(record.id)}>
        Details
      </button>
    </article>
  )
}

export default RecordCard
