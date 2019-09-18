const { Pool } = require('pg')

const connectionString = require('postgres://droqguar:ZFvjAaLG8Dp22CCmsV0InzFpNxWG95KP@salt.db.elephantsql.com:5432/droqguar')

const pool = new Pool({
  connectionString: connectionString
});

pool.query(`CREATE TABLE IF NOT EXISTS entries (
    "_id" serial NOT NULL,
	"type" varchar(255) NOT NULL,
	"status" BOOLEAN NOT NULL,
	"lat" DECIMAL NOT NULL,
	"lng" DECIMAL NOT NULL,
	"notes" varchar(500),
	"posted" TIMESTAMP NOT NULL,
	CONSTRAINT "entries_pk" PRIMARY KEY ("_id")
    )`, (err, res) => {
    if(err) {
      throw 'schema error';
    }
  }
  )

module.exports = {
  query: (text, params) => pool.query(text, params, callback)
}