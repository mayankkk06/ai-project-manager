SELECT
    status,
    COUNT(*) AS total_projects
FROM projects
WHERE status != 'completed'
GROUP BY status
ORDER BY total_projects DESC;