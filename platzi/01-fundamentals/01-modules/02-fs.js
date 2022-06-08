const fs = require('fs').promises;

const readFile = async (path, callback) => {
  try {
    const data = await fs.readFile(path);
    callback(data.toString());
  } catch (err) {
    console.error(`Error trying to read "${path}" file!\n${err}`);
  }
}

const writeFile = async (path, data, callback) => {
  try {
    await fs.writeFile(path, data);
    callback(`File "${path}" wrote successfully!`);
  } catch (err) {
    console.error(`Error trying to write "${path}" file!\n${err}`);
  }
}

const deleteFile = async (path, callback) => {
  try {
    fs.unlink(path);
    callback(`File "${path}" deleted successfully!`);
  } catch (err) {
    console.error(`Error trying to delete "${path}" file!\n${err}`);
  }
}

// readFile(__dirname + '/file.txt', console.log);
// writeFile(__dirname + '/file1.txt', "I'm a new file.", console.log);
// deleteFile(__dirname + '/file1.txt', console.log);