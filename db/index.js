const { Pool } = require('pg')

const connectionString = 'postgres://droqguar:ZFvjAaLG8Dp22CCmsV0InzFpNxWG95KP@salt.db.elephantsql.com:5432/droqguar'

const pool = new Pool({
  connectionString: connectionString
});

pool.query(`CREATE TABLE IF NOT EXISTS entries (
    "_id" SERIAL PRIMARY KEY NOT NULL,
	"type" varchar(255) NOT NULL,
	"status" BOOLEAN NOT NULL,
	"lat" DECIMAL NOT NULL,
	"lng" DECIMAL NOT NULL,
	"notes" varchar(500),
	"posted" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW())`,
    (err, res) => {
    if(err) {
        console.log(err);
      throw 'table creation error';
    }
  }
  )

module.exports = pool;