CREATE TABLE projects (
    project_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    status VARCHAR(50)
);

CREATE TABLE tasks (
    task_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    status VARCHAR(50),
    project_id INTEGER,
    FOREIGN KEY (project_id) REFERENCES projects(project_id)
);