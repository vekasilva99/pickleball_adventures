/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        // DB_URI:"mongodb://localhost:27017/pickelball-adventures",
        // PERU:"64e7d0b93093bbf9d66f1618",
        // WEBAPP_URL:"http://localhost:3000/",


        PERU:"64f5ba97385ada58c779deda",
        DB_URI:"mongodb+srv://pickleball-adevntures:TyynIs8itnzqGk0R@pickleballadventures.lkehhod.mongodb.net/?retryWrites=true&w=majority",
        WEBAPP_URL:"https://pickleball-adventures.vercel.app/"
    }
}

module.exports = nextConfig
