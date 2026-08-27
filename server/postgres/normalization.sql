-- Projects and Tasks are stored in separate tables.
-- Each task references a project using project_id.
-- This reduces duplicate project data.

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE
);

CREATE TABLE project_members (
    project_id INTEGER REFERENCES projects(project_id),
    user_id INTEGER REFERENCES users(user_id),
    PRIMARY KEY (project_id, user_id)
);