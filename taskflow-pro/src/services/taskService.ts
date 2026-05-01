import api from "../../../../taskflow-pro12/Team Task Manager/taskflow-pro/src/services/api";

export const taskService = {
  getProjectTasks: (projectId: string) =>
    api.get(`/projects/${projectId}/tasks`),
  createTask: (projectId: string, data: any) =>
    api.post(`/projects/${projectId}/tasks`, data),
  getTask: (taskId: string) => api.get(`/tasks/${taskId}`),
  updateTask: (taskId: string, data: any) =>
    api.patch(`/tasks/${taskId}`, data),
  deleteTask: (taskId: string) => api.delete(`/tasks/${taskId}`),
};
