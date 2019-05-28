if(process.env.NODE_ENV === 'production')
{
  module.exports ={
   mongoURI: "mongodb://lokhrafa:rafael123@ds131905.mlab.com:31905/mevnauthdatabase",
   secret: 'yoursecret'
  }  

} else {
    module.exports = {
        mongoURI: "mongodb://localhost:27017/meven_auth",
        secret: 'yoursecret'
    }

}