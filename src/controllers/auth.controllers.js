 class AuthController {
     /*********************User Signup**************** ****/
     userRegistration = async (req, res) => {
         try {
             console.log('dsffffffff');
         } catch (e) {
             console.error("Error during user registration:", e); // Log the actual error to understand the issue
             //  let data = helper.failed(
             //      500,
             //      "An unexpected error occurred. Please try again."
             //  );
             //  return res.status(500).json(data);
         }
     };


 }

 module.exports = new AuthController();