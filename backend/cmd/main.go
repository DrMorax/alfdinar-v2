package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"

	"github.com/julienschmidt/httprouter"
	"github.com/rs/cors"
)

// Data structure for example
type DataItem struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

func main() {
	router := httprouter.New()

	// CORS middleware
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowCredentials: true,
	})

	// Data endpoint
	router.HandlerFunc(http.MethodGet, "/api/data", func(w http.ResponseWriter, r *http.Request) {
		data := []DataItem{
			{ID: "1", Name: "Sample Item 1"},
			{ID: "2", Name: "Sample Item 2"},
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(data)
	})

	// Health check endpoint
	router.HandlerFunc(http.MethodGet, "/health", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("OK"))
	})

	// Determine port from environment or default
	port := os.Getenv("PORT")
	if port == "" {
		port = "4000"
	}

	log.Printf("Server starting on port %s", port)
	log.Fatal(http.ListenAndServe(":"+port, c.Handler(router)))
}
