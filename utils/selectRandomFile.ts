export default function getRandomFilePath(path: string = "/images/auth", min: number = 1, max: number = 10){
    const random = Math.floor(Math.random() * (max - min)) + min;
    let chosenPath = `${path}/${random}.avif`
    return chosenPath
}
