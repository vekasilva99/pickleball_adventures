/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        // DB_URI:"mongodb://localhost:27017/pickelball-adventures"
        DB_URI:"mongodb+srv://pickleball-adevntures:TyynIs8itnzqGk0R@pickleballadventures.lkehhod.mongodb.net/?retryWrites=true&w=majority"
    }
}

module.exports = nextConfig
