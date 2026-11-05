
function Details({ record }) {
  return (
    <section>
      <h2>Game Details: {record.Name}</h2>
      <p>Category: {record.Category}</p>
      <p>Average game time: {record["Average game time"]} minutes</p>
      <p>Year released: {record["Year released"]}</p>
      <p>Designer: {record.Designer}</p>
    </section>
  )
}

export default Details
