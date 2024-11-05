package main

import (
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv" // For loading environment variables
	"github.com/go-chi/chi/v5" // Routing package
	"petrosphotoquest/backend/config"
	"petrosphotoquest/backend/routes"
)

func main() {
	// Load environment variables
	err := godotenv.Load()
	if err != nil {
		log.Println("No .env file found, using environment variables")
	}

	// Set up router
	router := chi.NewRouter()

	// Load routes
	routes.RegisterRoutes(router)

	// Serve static files (React frontend)
	staticDir := "../frontend/build"
	fs := http.FileServer(http.Dir(staticDir))
	router.Handle("/*", http.StripPrefix("/", fs))

	// Start the server
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080" // Default port
	}
	log.Printf("Server is running on port %s...", port)
	log.Fatal(http.ListenAndServe(":"+port, router))
}
