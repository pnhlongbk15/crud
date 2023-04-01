const RouteBasic = "http://localhost:5093/api"

export const fetchRoute = {
        "getAllEmployee": `${RouteBasic}`, //get
        "updateOne": `${RouteBasic}`, //put
        "addOne": `${RouteBasic}`, //post
        "getAllDepartment": `${RouteBasic}`,
        "updateDepartment": `${RouteBasic}/Department/UpdateOne`,
        "addDepartment": `${RouteBasic}/Department/AddOne`, //post
        "deleteDepartment": `${RouteBasic}/Department/DeleteOne`
}