 React To-Do List 
================  

A simple React app to manage tasks with a clean UI, built with Vite and plain CSS.

Features
--------

*   Add, remove, and complete tasks.
    
*   Filter tasks (All, Active, Done).
    
*   Save tasks in localStorage.
    
*   Responsive design with animations.
    

Setup
-----

1.  git clone https://github.com/nikhiljangid120/react-todo-list.gitcd react-todo-list
    
2.  npm install
    
3.  npm run devOpen http://localhost:5173.
    

Testing
-------

1.  **Add Task**: Enter a task (e.g., "Study") and click "Add". Check if it appears.
    
2.  **Validation**: Try adding an empty task. Ensure an error shows.
    
3.  **Complete Task**: Check a task’s checkbox. Verify it gets a strikethrough.
    
4.  **Remove Task**: Click "✕" on a task. Confirm it’s gone.
    
5.  **Filter**: Click "All", "Active", or "Done". Verify correct tasks show.
    
6.  **Persistence**: Add tasks, refresh browser, and check if tasks remain.
    
7.  **UI**: Hover over tasks/buttons to confirm animations. Test on mobile/desktop.
    

Automated Testing
-----------------

1.  npm install --save-dev @testing-library/react @testing-library/jest-dom jest
    
2.  npm test
    

Files
-----

*   src/App.jsx: Core app logic and UI.
    
*   src/App.css: Plain CSS styles.
    
*   index.html, main.jsx: App entry points.
