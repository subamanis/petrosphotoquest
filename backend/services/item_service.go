package services

import (
	"petrosphotoquest/backend/db"
	"petrosphotoquest/backend/models"
)

func GetItems() ([]models.Item, error) {
	return db.GetItems() // Replace with your Jet-generated query
}

func GetItemByID(id int) (*models.Item, error) {
	return db.GetItemByID(id) // Replace with your Jet-generated query
}
