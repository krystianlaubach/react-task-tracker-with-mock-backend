import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TaskFetcher from './data/TaskFetcher';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState([]);

    const toggleAddTask = () => {
        setShowAddTask(!showAddTask);
    };

    const saveTask = (task) => {
        TaskFetcher.saveTaskToServer(task).then((newTask) => {
            setTasks([...tasks, newTask]);
            toggleAddTask();
        });
    };

    const toggleReminder = (id) => {
        TaskFetcher.fetchTask(id).then((taskToToggle) => {
            const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

            TaskFetcher.updateTask(updatedTask).then((updatedTaskFromServer) => {
                setTasks(
                    tasks.map(
                        (task) => task.id === id ? { ...task, reminder: updatedTaskFromServer.reminder } : task
                    )
                );
            });
        });
    };

    const deleteTask = (id) => {
        TaskFetcher.deleteTaskFromServer(id).then((response) => {
            if (response.ok) {
                setTasks(
                    tasks.filter(
                        (task) => task.id !== id
                    )
                );
            }
        });
    };

    useEffect(() => {
        TaskFetcher.fetchTasks().then((tasksFromServer) => {
            setTasks(tasksFromServer);
        });
    }, []);

    return (
        <Router>
            <div className='container'>
                <Header showAddTask={ showAddTask } onToggleAddTask={ toggleAddTask } />
                <Route path='/' exact render={() => (
                    <div>
                        { showAddTask && <AddTask onSaveTask={ saveTask } /> }
                        <Tasks tasks={ tasks } onToggle={ toggleReminder } onDelete={ deleteTask } />
                        <Footer />
                    </div>
                )} />
                <Route path='/about' component={ About } />
            </div>
        </Router>
    );
}

export default App;
