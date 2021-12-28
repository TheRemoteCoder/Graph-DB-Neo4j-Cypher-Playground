(async() => {
  const neo4j = require('neo4j-driver')

  const uri      = 'neo4j+s://ce37d5bb.databases.neo4j.io'
  const user     = 'neo4j'
  const password = 'rENURA-RUNuVNQESdx77r6MHa40Ivqfv-z4uK5uvFNI'

  const driver  = neo4j.driver(uri, neo4j.auth.basic(user, password))
  const session = driver.session()

  const person1Name = 'Alice'
  const person2Name = 'David'

  try {
    // Cypher syntax: https://neo4j.com/docs/cypher-manual/current
    // Reference card, keywords: https://neo4j.com/docs/cypher-refcard/current
    const writeQuery = `
      MERGE (p1:Person { name: $person1Name })
      MERGE (p2:Person { name: $person2Name })
      MERGE (p1)-[:KNOWS]->(p2)
      RETURN p1, p2`

    // Write transactions allow driver to handle retries + transient errors
    const writeResult = await session.writeTransaction(tx =>
      tx.run(writeQuery, { person1Name, person2Name })
    )

    writeResult.records.forEach(record => {
      const person1Node = record.get('p1')
      const person2Node = record.get('p2')

      console.log(
        `Created friendship between: ${person1Node.properties.name}, ${person2Node.properties.name}`
      )
    })

    const readQuery = `
      MATCH (p:Person)
      WHERE p.name = $personName
      RETURN p.name AS name`

    const readResult = await session.readTransaction(tx =>
      tx.run(readQuery, { personName: person1Name })
    )

    readResult.records.forEach(record => {
      console.log(`Found person: ${record.get('name')}`)
    })
  }
  catch (error) {
    console.error('Something went wrong: ', error)
  }
  finally {
    await session.close()
  }


  await driver.close()

})()

