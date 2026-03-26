const cds = require('@sap/cds')

const { GET, POST, expect, axios } = cds.test (__dirname+'/..')
axios.defaults.auth = { username: 'alice', password: '' }

describe('CatalogService OData APIs', () => {

  it('serves CatalogService.ListOfBooks', async () => {
    const { data } = await GET `/odata/v4/catalog/ListOfBooks ${{ params: { $select: 'ID,author' } }}`
    expect(data.value).to.containSubset([
      {"ID":"21505957-cc72-4ccb-a6bc-ee743ff0d124","author":"author-2150595"},
    ])
  })

  it('executes submitOrder', async () => {
    const { data } = await POST `/odata/v4/catalog/submitOrder ${
      {"book":"28960557-106a-4bb2-8e7a-afd9c2b7da0a","quantity":86}
    }`
    // TODO finish this test
    // expect(data.value).to...
  })
})
