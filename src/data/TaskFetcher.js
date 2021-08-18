class TaskFetcher {
    /**
     * @public
     *
     * @returns {Promise<any>}
     */
    async fetchTasks()  {
        const response = await fetch('http://localhost:5000/tasks/');

        return await response.json();
    };

    /**
     * @public
     *
     * @param {number} id
     *
     * @returns {Promise<any>}
     */
    async fetchTask(id) {
        const response = await fetch('http://localhost:5000/tasks/' + id);

        return await response.json();
    };

    async saveTaskToServer(task) {
        const response = await fetch ('http://localhost:5000/tasks/', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(task),
        });

        return await response.json();
    };

    async updateTask(updatedTask) {
        const response = await fetch ('http://localhost:5000/tasks/' + updatedTask.id, {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(updatedTask),
        });

        return await response.json();
    };

    async deleteTaskFromServer(id) {
        return await fetch('http://localhost:5000/tasks/' + id, {
            method: 'DELETE',
        });
    };
}

export default new TaskFetcher();