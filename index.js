const sum = require('lodash.sum')

exports.handler = async event => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
        message: 'Hello from Lambda!',
        sum: sum([1, 2, 3])
        })
    }
    return response
}
