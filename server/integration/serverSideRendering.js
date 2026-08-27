const renderProjectPage = (project) => {
  return `
    <html>
      <head>
        <title>${project.title}</title>
      </head>
      <body>
        <h1>${project.title}</h1>
        <p>${project.description}</p>
        <p>Status: ${project.status}</p>
      </body>
    </html>
  `;
};

module.exports = renderProjectPage;