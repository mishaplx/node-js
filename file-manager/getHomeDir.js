export default function getHomeDir(){
    return process.env.HOME || process.env.USERPROFILE
}