# API Documentation

## Endpoints

### GET /api/questions

Fetch questions for a game session.

**Query Parameters:**
- `category` (optional): Filter by category
- `difficulty` (optional): easy, medium, hard, expert
- `limit` (optional): Number of questions (default: 10)

**Response:**
```json
{
  "questions": [
    {
      "id": "q1",
      "question": "What is the capital of France?",
      "options": ["Paris", "London", "Berlin", "Madrid"],
      "correctAnswer": 0,
      "category": "general",
      "difficulty": "easy"
    }
  ]
}
```

### POST /api/scores

Submit game score.

**Body:**
```json
{
  "address": "0x...",
  "score": 8500,
  "category": "science",
  "difficulty": "medium"
}
```

### GET /api/leaderboard

Get top scores.

**Query Parameters:**
- `limit` (optional): Number of entries (default: 10)
- `category` (optional): Filter by category
