const startServer = async app => {
    const PORT = process.env.PORT || 4001;
    try {
        app.listen(process.env.PORT, () => {
            console.warn(`Server is running at http://localhost:${PORT}`)
        })
    } catch (error) {
        console.error('Failed to start the server:', error)
        process.exit(1)
    }
}

module.exports = startServer 