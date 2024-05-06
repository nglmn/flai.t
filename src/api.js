export const getArtistData = async () => {
    try {
        const response = await fetch("api_url");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // const { artist } = await response.json();
        // return artist;
        return response;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}