package main

import (
	"github.com/RianIhsan/go-restapi-gin/controllers/productcontroller"
	"github.com/RianIhsan/go-restapi-gin/models"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	App := gin.Default()
	models.ConnectDatabase()

	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"*"}
	App.Use(cors.New(config))

	App.GET("/api/products/", productcontroller.Index)
	App.GET("/api/products/:id", productcontroller.Read)
	App.POST("/api/products/", productcontroller.Create)
	App.PUT("/api/products/:id", productcontroller.Update)
	App.DELETE("/api/products/:id", productcontroller.Delete)

	App.Run()
}
