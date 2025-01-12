const getHealth =(req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is running on this port"
    })
}


export{
    getHealth,
}