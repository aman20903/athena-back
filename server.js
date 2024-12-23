const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Enable CORS
app.use(cors());

// Mock candidate data
const candidates = [
    { id: 1, name: "Alice Johnson", skills: "JavaScript, React", experience: 5 },
    { id: 2, name: "Bob Smith", skills: "Java, Spring Boot, React", experience: 8 },
    { id: 3, name: "Carol Lee", skills: "Python, Django, JavaScript", experience: 6 },
    { id: 4, name: "David Kim", skills: "C#, .NET, React", experience: 7 },
    { id: 5, name: "Emma Watson", skills: "Ruby, Rails, Django", experience: 4 },
    { id: 6, name: "Frank Green", skills: "Go, Kubernetes", experience: 3 },
    { id: 7, name: "Grace Brown", skills: "PHP, Laravel, JavaScript", experience: 6 },
    { id: 8, name: "Hank White", skills: "C++, Unreal Engine", experience: 9 },
    { id: 9, name: "Ivy Blue", skills: "Swift, iOS, React", experience: 5 },
    { id: 10, name: "Jack Black", skills: "Kotlin, Android, Django", experience: 4 }
];
  

// API endpoint
app.get('/api/candidates', (req, res) => {
  res.json(candidates);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
