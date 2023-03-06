Frontend:

*change directory to frontend directory

    npm start

Backend: 

*change directory to backend directory

1. pip install -r requirements.txt

2. using proper virtual environment, s.t. virtualenv
    - create virtual env (may not needed)
                `virtualenv venv`
    - call the virtual env 
                `Set-ExecutionPolicy Unrestricted -Scope Process`
    - active virtual env
                `venv\Scripts\activate`

3.      uvicorn main:app --reload

4. after backend starts running, using http://127.0.0.1:8000/docs to get backend UI
