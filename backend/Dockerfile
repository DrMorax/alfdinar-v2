# Build stage
FROM golang:1.23-alpine AS builder

WORKDIR /app

# Copy go mod and sum files
COPY go.mod go.sum* ./

# Download dependencies
RUN go mod download

# Copy the entire backend directory
COPY . .

# Build the application
# Assuming main.go is directly in cmd/
RUN CGO_ENABLED=0 GOOS=linux go build -o server ./cmd

# Final stage
FROM alpine:latest

WORKDIR /root/

# Copy the built binary
COPY --from=builder /app/server .

# Expose port 4000
EXPOSE 4000

# Run the binary
CMD ["./server"]