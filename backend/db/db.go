package config

import (
	"database/sql"
	"log"
	"os"

	"github.com/go-jet/jet/v2/postgres" // Replace with "mysql" if using MySQL
	_ "github.com/lib/pq"               // PostgreSQL driver
)

var DB *sql.DB

func ConnectDatabase() {
	var err error
	dsn := os.Getenv("DATABASE_URL")
	if dsn == "" {
		log.Fatal("DATABASE_URL environment variable is required")
	}

	DB, err = sql.Open("postgres", dsn)
	if err != nil {
		log.Fatal("Failed to connect to the database:", err)
	}

	// Verify connection
	err = DB.Ping()
	if err != nil {
		log.Fatal("Database connection error:", err)
	}

	log.Println("Database connected successfully!")
}
