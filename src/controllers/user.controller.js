const { HTTPResponse, HTTPError } = require("../utils/response")
const statusCodes = require("http-status-codes")


const userApi = async (req, res) => {
    let response = new HTTPResponse("public user response", statusCodes.OK)
    return res.status(statusCodes.OK).json(response);
}

module.exports = {
    userApi
}