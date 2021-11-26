module.exports = {

    async testList (request,response) {
    
        return response.json({
            user: "Pedro"
        })
    },
    
    async testBodyAndHeader(request,response) {

        const {name} = request.body
        const {auth} = request.headers

        return response.json({name,auth})

    },
    async testQuery(request,response) {

        const {id} = request.query

        return response.json({id})

    },
    
}