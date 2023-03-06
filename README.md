pip install -r requirements.txt

using proper virtual environment, s.t. virtualenv
    - create virtual env
        virtualenv venv
    - call the virtual env 
        Set-ExecutionPolicy Unrestricted -Scope Process
    - active virtual env
        venv\Scripts\activate

uvicorn main:app --reload

after backend starts running, using http://127.0.0.1:8000/docs to get backend UI