import data from "./data.json";

export const getArtistData = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve(data.artist);
        }, 1000)
    })
}

export const getPostsData = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve(data.post_data);
        }, 1000)
    })
}

export const getAudienceData = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve(data.audience);
        }, 1000)
    })
}