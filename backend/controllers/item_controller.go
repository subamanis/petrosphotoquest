package controllers

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"
	"petrosphotoquest/backend/services"
)

func GetItems(w http.ResponseWriter, r *http.Request) {
	items, err := services.GetItems()
	if err != nil {
		http.Error(w, "Failed to get items", http.StatusInternalServerError)
		return
	}
	json.NewEncoder(w).Encode(items)
}

func GetItemByID(w http.ResponseWriter, r *http.Request) {
	idStr := chi.URLParam(r, "id")
	id, err := strconv.Atoi(idStr)
	if err != nil {
		http.Error(w, "Invalid ID", http.StatusBadRequest)
		return
	}

	item, err := services.GetItemByID(id)
	if err != nil {
		http.Error(w, "Item not found", http.StatusNotFound)
		return
	}
	json.NewEncoder(w).Encode(item)
}
