from flask import Flask, render_template, request, jsonify
import requests
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)   

API_KEY = os.getenv("API_KEY")


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message")

    response = requests.post(
        "https://openrouter.ai/api/v1/chat/completions",
        headers={
            "Authorization": f"Bearer {API_KEY}",
            "Content-Type": "application/json",
            "HTTP-Referer": "http://localhost:5000",
            "X-Title": "Career Assist AI"
        },
        json={
            "model": "stepfun/step-3.5-flash:free",
            "messages": [
                {
    "role": "system",
    "content": """
You are Career Assist AI, a professional Job Application Assistant.

Purpose:
- Improve resumes
- Compress job descriptions
- Generate cover letters
- Provide interview preparation
- Offer career guidance

Strict Rules:
- You MUST only respond to career-related questions.
- If the question is unrelated (jokes, entertainment, politics, trivia, etc.),
  DO NOT answer it.
- Instead, politely state that you only assist with career-related topics.
- Keep responses concise, structured, and professional.
- Prefer bullet points when appropriate.
"""
}
,
                {"role": "user", "content": user_message}
            ]
        }
    )

    data = response.json()
    print(data)
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)
