package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var collection *mongo.Collection

func connectDB() {
	// Get MongoDB URI from environment variable or use a fallback
	mongoURI := os.Getenv("MONGODB_URI")
	if mongoURI == "" {
		log.Println("⚠️ MONGODB_URI is not set! Using fallback connection string.")
		mongoURI = "mongodb+srv://mithravindanambiar2004:JjzeZr1922Z94jVu@zocket.7y8go.mongodb.net/?retryWrites=true&w=majority&appName=zocket"
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	// Connect to MongoDB
	client, err := mongo.Connect(ctx, options.Client().ApplyURI(mongoURI))
	if err != nil {
		log.Fatalf("❌ Error connecting to MongoDB: %v", err)
	}

	// Check the connection
	err = client.Ping(ctx, nil)
	if err != nil {
		log.Fatalf("❌ Error pinging MongoDB: %v", err)
	}

	log.Println("✅ Connected to MongoDB!")

	// Get collection
	collection = client.Database("taskmanager").Collection("tasks")
	fmt.Println("📌 Collection selected: tasks")
}
