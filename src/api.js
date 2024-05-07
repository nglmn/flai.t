import data from "./data.json";

export const getArtistData = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(data.artist);
        }, 1000)
    })
}