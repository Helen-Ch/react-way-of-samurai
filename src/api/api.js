import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "203d8668-7e5a-4f32-84a2-15b405dfeaa8"
    },
});

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
};

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`);
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`);
    },
    getProfile(profileId) {
        return instance.get(`profile/${profileId}`);
    },
};

