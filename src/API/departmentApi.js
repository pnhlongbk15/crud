import { axiosClient } from "./axiosClient";

export const departmentApi = {
        async getAllDepartment() {
                try {
                        const url = '/Department/GetAllDepartment';
                        const data = await axiosClient.get(url);
                        return data;
                } catch (e) {
                        console.log('getAllDepartment:', e.message);
                }
        },
        async addDepartment(body) {
                const url = '/Department/AddOne';
                const data = await axiosClient.post(url, body);
                return data;
        },
        async deleteDepartment(id) {
                const url = `/Department/DeleteOne/${id}`;
                const data = await axiosClient.delete(url);
                return data;
        }
}