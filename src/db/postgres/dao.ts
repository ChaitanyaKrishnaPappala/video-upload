import poolObj from "./pool";

const addVideo = (title) => {
  return new Promise((resolve, reject) => {
    poolObj.query(
      `INSERT INTO upload (title) VALUES ('${title}') RETURNING id`,
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows[0].id);
      }
    );
  });
};

const getVideoTitle = (id) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT title FROM upload WHERE id='${id}'`;
    poolObj.query(query, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results && results.rows ? results.rows : []);
    });
  });
};

module.exports = { addVideo, getVideoTitle };
