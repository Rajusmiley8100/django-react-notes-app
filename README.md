# Django + React Notes App 📝

A full-stack **Notes App** built with **Django** (backend) and **React** (frontend) that allows users to **create, read, update, and delete notes** with a clean and responsive interface.

---

## Features

- Create new notes with a **title** and **content**
- Edit and update existing notes
- Delete notes
- View all notes in a responsive UI
- RESTful API backend for data management
- Fully functional with local database or deployed server

---

## Tech Stack

- **Frontend:** React, Axios, TailwindCSS (or Bootstrap)
- **Backend:** Django, Django REST Framework
- **Database:** SQLite (default), can be upgraded to MySQL/PostgreSQL
- **Version Control:** Git & GitHub

---

## Installation & Setup

### Backend (Django)

1. Navigate to the backend folder:

```bash
cd backend

2 Create and activate virtual environment:

python -m venv env
# Windows
env\Scripts\activate
# Linux/Mac
source env/bin/activate

3 Install dependencies:
pip install -r requirements.txt

4 Apply migrations:
python manage.py migrate

5 Run the server:
python manage.py runserver


Frontend (React)

1 Navigate to the frontend folder:
cd frontend

2 Install dependencies:
npm install


3 Start the React app:
npm start


API Endpoints
Endpoint	          Method	           Description
/api/notes/           GET	               List all notes
/api/notes/	          POST	               Create a new note
/api/notes/:id/	      GET	               Retrieve a single note
/api/notes/:id/	      PUT	               Update a note
/api/notes/:id/	      DELETE	           Delete a note