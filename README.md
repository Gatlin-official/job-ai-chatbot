# Career Assist AI

## Project Overview

Career Assist AI is a domain-specific AI-powered chatbot designed to assist users with career development tasks such as resume improvement, job description summarization, cover letter generation, and interview preparation.

Unlike a generic chatbot, this system is focused strictly on career-related assistance and includes structured prompt engineering to maintain domain control.

---

## Problem Statement

Many job applicants struggle with:

- Writing strong resume bullet points
- Tailoring resumes to job descriptions
- Preparing structured interview answers
- Generating professional cover letters

Career Assist AI helps users efficiently craft better job applications using AI assistance.

---

## Key Features

### 1. Resume Improvement
Enhances weak resume statements into strong, quantified, professional bullet points.

### 2. Job Description Compression
Summarizes lengthy job descriptions into structured key points.

### 3. Cover Letter Generation
Generates professional and role-specific cover letters.

### 4. Interview Preparation
Provides structured answers and guidance for common interview questions.

### 5. Domain Restriction Control
The chatbot is restricted to career-related topics and politely refuses unrelated requests.

### 6. Quick-Action Career Templates (Creative Feature)
A unique usability feature that allows users to click predefined buttons such as:
- Resume Bullet
- Cover Letter
- Interview Question
- Summarize JD

These automatically insert structured prompts, improving user experience and productivity.

---

## Technical Architecture

### Frontend:
- HTML
- CSS
- JavaScript

### Backend:
- Python (Flask Framework)

### AI Integration:
- OpenRouter API
- StepFun 3.5 Flash (Free Model)
- Prompt Engineering for domain control

---

## System Workflow

1. User enters a message.
2. Frontend sends a POST request to the Flask backend.
3. Backend forwards the message to the AI model via API.
4. AI processes the request using structured system prompts.
5. Response is returned and displayed in chat interface.

---

## Security Implementation

- API key is stored securely in a `.env` file.
- API calls are handled server-side.
- The API key is never exposed to the frontend.

---

## Unique Contribution

The project is not a general chatbot. It is:

- Domain-focused
- Prompt-controlled
- Structured-response oriented
- User-guided through quick templates

This transforms the chatbot into a career productivity assistant rather than a conversational bot.

---

## Future Improvements

- Multi-turn memory support
- Resume file upload and parsing
- Role-specific interview simulation mode
- Export responses as PDF

---

## Author

Developed as part of an academic AI-based web application project.
