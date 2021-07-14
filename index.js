const sum = require('lodash.sum')

export.handler = async event => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello From Lambda!',
            sum: sum([1, 2, 3])
        })
    }
    return response
}