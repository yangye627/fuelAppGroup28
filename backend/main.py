from flask import Flask, jsonify, request
# from models import User
app = Flask(__name__)

@app.route("/user")
def u9ser():
    return {"user": ["hehe", "123"]}

user = {}

@app.route("/register", methods=['POST'])
def createUser():
    user_data = request.get_json()

    # when we have the db, store the user info to the database
    # user = User(username = user_data['username'], password = user_data['password'])
    
    username = user_data["username"]
    password = user_data["password"]
    user[username] = password
    print(user)
    return user_data

@app.route("/login", methods=['POST'])
def varifyUser():
    user_data = request.get_json()
    # when we have the db, we need to varify the username and password from db

    username = user_data["username"]
    password = user_data["password"]
    for i in user:
        if i == username and user[i] == password:
            return user_data # valid input
        
    return "unmatched username and password", 400 

if __name__ == "__main__":
    app.run(debug=True)