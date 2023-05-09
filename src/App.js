import './App.css';
import RoutePaths from './router/Routes';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AuthenLayout from './shared/containers/layouts/authen/AuthenLayout';
import { Route, Routes, Navigate } from 'react-router-dom';
import ShareLayout from './shared/containers/layouts/share/user/ShareLayout';
import OverviewPages from './pages/users/Overview';
import FigureContainer from './shared/containers/users/figure-container/FigureContainer';
import Priority from './shared/components/Priority/Priority';
import Assignee from './shared/components/Assignee/Assignee';
import TagLabel from './shared/components/TagLabel/TagLabel';
import LabelColor from './shared/components/LabelColor/LabelColor';
import DueDate from './shared/components/DueDate/DueDate';
import ColorRange from './shared/components/ColorRange/ColorRange';
import ProjectContainer from './shared/containers/users/ProjectContainer/ProjectContainer';
import Task from './shared/components/Task/Task';
import ListTasks from './shared/components/ListTasks/ListTasks';
import TaskDetail from './shared/components/task-detail/TaskDetail';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<AuthenLayout/>}>
           <Route path='/' element={<Navigate to={RoutePaths.LOGIN} />} />

            <Route path={RoutePaths.LOGIN} element={<LoginPage/>}/>
            <Route path={RoutePaths.REGISTER} element={<RegisterPage/>}/>
        </Route>

        <Route element={<ShareLayout/>}>
            <Route path='/priority' element={<Priority/>}/>
            <Route path='/asignee' element={<Assignee/>}/>
            <Route path='/figure' element={<FigureContainer/>}/>
            <Route path='/project-container' element={<ProjectContainer/>}/>
            <Route path='/tag' element={<TagLabel/>}/>
            <Route path='/project-container/detail' element={<TaskDetail/>}/>
            <Route path='/task' element={<Task/>}/>
            <Route path='/list-task' element={<ListTasks/>}/>
            <Route path='/due-date' element={<DueDate/>}/>
            <Route path='/color-range' element={<ColorRange/>}/>
            <Route path='/label-color' element={<LabelColor/>}/>
            <Route path='/figure-container' element={<FigureContainer/>}/>
            <Route path={RoutePaths.USER.OVERVIEW} element={<OverviewPages/>}/>
        </Route>

        <Route path='/*' element={<div>not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
