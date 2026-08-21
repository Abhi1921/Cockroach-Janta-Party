const { exec } = require('child_process');
const path = require('path');

module.exports = async (req, res) => {
  // Allow CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const scriptPath = path.resolve(__dirname, '..', 'scripts', 'auto-update-and-push.sh');

  exec(`bash "${scriptPath}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Exec error: ${error.message}`);
      return res.status(500).json({
        success: false,
        error: error.message,
        stderr: stderr
      });
    }

    return res.status(200).json({
      success: true,
      message: "Website news content updated and pushed to GitHub origin/main successfully!",
      stdout: stdout
    });
  });
};
