import React from "react";
import {
    Route,
    Routes,
    BrowserRouter
} from "react-router-dom";

import AboutUsPage from "./views/about-page";
import TaskDetailPage from "./views/task-detail-page";
import TaskEditPage from "./views/task-edit-page";
import TaskListPage from "./views/task-list-pages";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact={true} element={<TaskListPage />} />
                    <Route path="/detail" exact={true} element={<TaskDetailPage />} />
                    <Route path="/about" exact={true} element={<AboutUsPage />} />
                    <Route path={`/edit/:id`} exact={true} element={<TaskEditPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}