

module.exports = {

    allHouse:(req,res, next) =>{
        const db= req.app.get("db")
        db.getHouse().then(houses =>{
            res.status(200).send(houses)
            
        })
        
    }

}