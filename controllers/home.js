//Export object with getIndex method that renders a index.ejs as the response
module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    }
}