import axios from "axios";
import { deleteModerator, getModeratorList } from "../redux/user";
import { NoSsr } from "@mui/material";

let instance = axios.create({
    withCredentials: true,
    baseURL: 'http://127.0.0.1:8000/',
    headers: {
        'Content-Type': "application/json"
    }
})
const uen_token = 'uen_access_token';

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

export const userAPI = {
    async signup(data) {
        let res = await instance.post('auth/users/', data);
        return res;
    },

    async login(data) {
        let res = await instance.post('api/token/', data);
        return res;
    },

    async verifyEmail(token) {
        let res = await instance.post('auth/users/activation/', token);
        return res;
    },


    async getMe() {
        const token = getCookie(uen_token);
        let res = await instance.get("auth/users/me/", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        return res;
    },

    async verify() {
        const token = getCookie(uen_token);
        const res = await instance.post("auth/jwt/verify/", { token });
        return res;
    },

    async getModeratorList() {
        const token = getCookie(uen_token);
        const res = await instance.get('moderator/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        return res;
    },

    async getAnotherUser(url) {
        const token = getCookie(uen_token);
        const res = await instance.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return res;
    },

    async getUserList() {
        const token = getCookie(uen_token);
        const res = await instance.get('auth/users/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        return res;
    },

    async addModerator(data) {
        const token = getCookie(uen_token);
        const res = await instance.post('moderator/', data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return res;
    },

    async deleteModerator(mod_id) {
        const token = getCookie(uen_token);
        const res = await instance.delete(`moderator/${mod_id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return res;
    }
}

export const volAPI = {
    async sendVolApp(data) {
        const res = await instance.post('application_volonteer/', data, {
            headers: {
                'Content-Type': "application/x-www-form-urlencoded",
            }
        })
        return res;
    },

    async getVolApp() {
        const token = getCookie(uen_token)
        const res = await instance.get('application_volonteer/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        return res;
    },

    async delVolApp(id) {
        const token = getCookie(uen_token);
        const res = await instance.delete(`application_volonteer/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return res;
    },

    async updateVolApp(data, id) {
        const token = getCookie(uen_token);
        const res = await instance.patch(`application_volonteer/${id}/`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return res;
    },

    async getVolList() {
        const token = getCookie(uen_token);

        const res = await instance.get('volonteer/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        return res;
    },

    async delVol(volId) {
        const token = getCookie(uen_token);

        const res = await instance.delete(`volonteer/${volId}/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return res;
    },

    async getVol(volId) {
        const token = getCookie(uen_token);

        const res = await instance.get(`volonteer/${volId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return res;
    },

    async changeVolAva(volId, data) {
        const token = getCookie(uen_token);

        const res = await instance.patch(`/volonteer/${volId}/`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': "multipart/form-data"
            }
        });

        return res;
    },
    async changeVol(volId, data) {
        const token = getCookie(uen_token);

        const res = await instance.patch(`/volonteer/${volId}/`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });

        return res;
    }
}

export const redactorAPI = {
    async sendRedactorApp(data) {
        const res = await instance.post('application_redactor/', data, {
            headers: {
                'Content-Type': "application/x-www-form-urlencoded",
            }
        });
        return res;
    },

    async getRedactorApp() {
        const token = getCookie(uen_token)
        const res = await instance.get('application_redactor/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        return res;
    },

    async delRedactorApp(id) {
        const token = getCookie(uen_token);
        const res = await instance.delete(`application_redactor/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return res;
    },

    async updateRedactorApp(data, id) {
        const token = getCookie(uen_token);
        const res = await instance.patch(`application_redactor/${id}/`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return res;
    },

    async getRedactorList() {
        const token = getCookie(uen_token);

        const res = await instance.get('redactor/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        return res;
    },

    async delRedactor(redactorId) {
        const token = getCookie(uen_token);

        const res = await instance.delete(`redactor/${redactorId}/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return res;
    },

    async changeRedactor(redactorId, data) {
        const token = getCookie(uen_token);

        const res = await instance.patch(`redactor/${redactorId}/`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return res;
    },
    async changeRedactorAva(redactorId, data) {
        const token = getCookie(uen_token);

        const res = await instance.patch(`redactor/${redactorId}/`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': "multipart/form-data"
            }
        });
        return res;
    },
    async changeRedactor(redactorId, data) {
        const token = getCookie(uen_token);

        const res = await instance.patch(`redactor/${redactorId}/`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        return res;
    },

    async createPost(data) {
        const token = getCookie(uen_token);

        const res = await instance.post(`post/`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        return res;
    },

    async getPostList() {
        const token = getCookie(uen_token);

        const res = await instance.get(`post/`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        return res;
    },

    async likePost(data) {
        const token = getCookie(uen_token);

        const res = await instance.post(`post_like/`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        return res;
    },

    async deletePost(postId) {
        const token = getCookie(uen_token);

        const res = await instance.delete(`post/${postId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        return res;
    }
}

export const orgAPI = {
    async sendOrgApp(data) {
        const res = await instance.post('application_organization/', data, {
            headers: {
                'Content-Type': "application/x-www-form-urlencoded",
            }
        });
        return res;
    },

    async getOrgApp() {
        const token = getCookie(uen_token)
        const res = await instance.get('application_organization/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        return res;
    },

    async delOrgApp(id) {
        const token = getCookie(uen_token);
        const res = await instance.delete(`application_organization/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return res;
    },

    async updateOrgApp(data, id) {
        const token = getCookie(uen_token);
        const res = await instance.patch(`application_organization/${id}/`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return res;
    },

    async getOrgList() {
        const token = getCookie(uen_token);

        const res = await instance.get('orgnanization/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        return res;
    },

    async delOrg(orgId) {
        const token = getCookie(uen_token);

        const res = await instance.delete(`orgnanization/${orgId}/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return res;
    },

    async changeOrg(orgId, data) {
        const token = getCookie(uen_token);

        const res = await instance.patch(`orgnanization/${orgId}/`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return res;
    },

    async changeOrgAva(orgId, data) {
        const token = getCookie(uen_token);

        const res = await instance.patch(`orgnanization/${orgId}/`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': "multipart/form-data"
            }
        });
        return res;
    },
    async changeOrg(orgId, data) {
        const token = getCookie(uen_token);

        const res = await instance.patch(`orgnanization/${orgId}/`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        return res;
    },

    async getFavoriteOrg() {
        const token = getCookie(uen_token);

        const res = await instance.get('favourite_organization/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        return res;
    },

    async addFavoriteOrg(data) {
        const token = getCookie(uen_token);

        const res = await instance.post('favourite_organization/', data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        return res;
    },

    async deleteFavoriteOrg(favOrgId) {
        const token = getCookie(uen_token);

        const res = await instance.delete(`favourite_organization/${favOrgId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return res;
    }
}