SELECT
    projects.title AS project_name,
    tasks.title AS task_name,
    tasks.status
FROM projects
INNER JOIN tasks
ON projects.project_id = tasks.project_id;