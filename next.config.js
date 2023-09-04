/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        DB_URI:"mongodb://localhost:27017/pickelball-adventures",
        //DB_URI:"mongodb+srv://pickleball-adevntures:TyynIs8itnzqGk0R@pickleballadventures.lkehhod.mongodb.net/?retryWrites=true&w=majority",
        WEBAPP_URL:"http://localhost:3000/",
        // WEBAPP_URL:"https://pickleball-adventures.vercel.app/"
    }
}

module.exports = nextConfig
