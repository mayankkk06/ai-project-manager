CREATE INDEX idx_projects_status
ON projects(status);

CREATE INDEX idx_tasks_project_id
ON tasks(project_id);