export const UserRolesEnum = {
   ADMIN : "admin",
   PROJECT_ADMIN : "project_admin",
   MEMBER : "member",

};

export const AvailableUserRole = Object.values(UserRolesEnum)
//the values (not keys) of the object above is converted into an array and this array can be used for the basic operations that we do on an array

// this is done so that if someone wants to use object and access the above one or if in array can access the below one. Makes our application scalable



export const TaskStatusEnum = {
    TODO : "todo",
    IN_PROGRESS :  "in_progress",
    DONE : "done",


};

export const AvailableTaskStatus = Object.values(TaskStatusEnum);