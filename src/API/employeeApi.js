import { axiosClient } from "./axiosClient";

export const employeeApi = {
        async getAllEmployee() {
                try {
                        const url = '/Employee/GetAllEmployee';
                        const data = await axiosClient.get(url);
                        return data;
                } catch (e) {
                        console.log('getAllEmployee:', e.message);
                }
        },
        async updateEmployee(body) {
                try {
                        const url = '/Employee/UpdateOne';
                        const data = await axiosClient.put(url, body);
                        return data;
                } catch (e) {
                        console.log('updateEmployee:', e.message);
                }
        },
        async addEmployee(body) {
                try {
                        const url = '/Employee/AddOne';
                        const data = await axiosClient.post(url, {
                                ...body,
                                "lastName": "Pham",
                                "dateOfBirth": "2023-03-28T07:50:30.075Z",
                        });
                        return data;
                } catch (e) {
                        console.log('addEmployee:', e.message);
                }
        }
}