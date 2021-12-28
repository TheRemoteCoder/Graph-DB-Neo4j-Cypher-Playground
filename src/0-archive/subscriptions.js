const neo4j = require('neo4j-driver')

const driver = neo4j.driver('bolt://localhost:7687', neo4j.auth.basic('neo4j', 'secret99'))

const rxSession = driver.rxSession()

rxSession.run('', {}).subscribe({
  onKeys: (keys) => {
    console.log(keys)
  },
  onNext: (record) => {
    console.log(record.get(''))
  },
  onCompleted: () => {
    rxSession.close()
  },
  onError: (error) => {
    console.log(error)
  },
})

driver.close()

