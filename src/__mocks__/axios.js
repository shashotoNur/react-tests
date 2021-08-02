
const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: "Jordan",
                    last: "Davies"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/51.jpg"
                },
                login: {
                    username: "orangepeacock760"
                }
            }
        ]
    }
};

const get = jest.fn().mockResolvedValue(mockResponse);
const axios = { get };

export default axios;
