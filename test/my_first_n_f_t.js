const MyFirstNFT = artifacts.require("MyFirstNFT");
// require('chai')
//     .use(require('chai-as-promised'))
//     .should()
/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("MyFirstNFT", function(accounts) {
    let contract

    before(async() => {
        contract = await MyFirstNFT.deployed()
    })

    describe('testing phase', async() => {
        it('Deployment successfully', async() => {
            const address = await contract.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)

        })
        it('total tokens-1', async() => {
            const token = await contract.totalSupply()
            assert.equal(token, 0)
        })
        it('minting 1st nft', async() => {
                const result = await contract.mint('www.nft.com')
                const token = await contract.totalSupply()
                assert.equal(token, 1)
                const event = result.logs[0].args
                assert.equal(event.tokenId.toNumber(), 1, 'id is correct')
                assert.equal(event.from, '0x0000000000000000000000000000000000000000', 'from is correct')
                assert.equal(event.to, accounts[0], 'to is correct')
            })
            // it('trying to mint same nft failed', async() => {
            //     const result = await contract.mint('www.nft.com')
            // })
        it('indexing-1', async() => {
            await contract.mint('www.nft22.com')
            await contract.mint('www.nft33.com')
            await contract.mint('www.nft44.com')
            await contract.mint('www.nft55.com')
            const token = await contract.totalSupply()
            assert.equal(token, 5)
        })
        it('owner of nfts', async() => {
            const result = await contract.tokensOfOwner(accounts[0])
            console.log(result)

        })
        it('transfering nft', async() => {
            await contract.transferFrom(accounts[0], accounts[1], 2)
        })

        it('after transfer owner of nfts', async() => {
            const result = await contract.tokensOfOwner(accounts[0])
            console.log(result)

        })
    })

});