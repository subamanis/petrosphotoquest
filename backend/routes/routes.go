package routes

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"petrosphotoquest/backend/controllers"
)

func RegisterRoutes(router *chi.Mux) {
	router.Get("/api/items", controllers.GetItems)
	router.Get("/api/items/{id}", controllers.GetItemByID)
}
