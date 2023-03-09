from flask import Flask, jsonify, request
# from models import User
app = Flask(__name__)

############################################
# user dict is hardcode for assignment 3
# user schema:
# user = {
#   "userNameExample_1" : {
#       password : "passwordExample_1",
#       fullName : "fullNameExample_1",
#       address1 : "address1Example_1",
#       address2 : "address2Example_1",
#       city     : "cityExample_1",
#       state    : "stateExample_1",
#       zipcode  : "zipcodeExample_1"
#   },
#   "userNameExample_2" : {
#       password : "passwordExample_2",
#       fullName : "fullNameExample_2",
#       address1 : "address1Example_2",
#       address2 : "address2Example_2",
#       city     : "cityExample_2",
#       state    : "stateExample_2",
#       zipcode  : "zipcodeExample_2"
#   },
#   .
#   .
#   .
#   .
#   .
#   .
# }
############################################
user = {}
userName = "" # it's key for now before assignment 4

@app.route("/register", methods=['POST'])
def createUser():
    user_data = request.get_json()

    # when we have the db, store the user info to the database    
    username = user_data["username"]
    password = user_data["password"]
    user[username] = {}
    user[username]["password"] = password
    print(f"register {user}")
    return user_data

@app.route("/login", methods=['POST'])
def varifyUser():
    user_data = request.get_json()
    # when we have the db, we need to varify the username and password from db
    print(f"login {user_data}")
    username = user_data["username"]
    password = user_data["password"]
    for i in user:
        if i == username and user[i]["password"] == password:
            global userName
            userName = username
            return user_data # valid input
        
    return "unmatched username and password", 400 

@app.route("/userInfo")
def userInfo():
    if len(userName):
        return {"user": user[userName]}
    else:
        return {"user": "null"}

@app.route("/profile", methods=['POST'])
def updateProfile():
    profile_data = request.get_json()
    fullName = profile_data["fullName"]
    address1 = profile_data["address1"]
    address2 = profile_data["address2"]
    city     = profile_data["city"]     
    state    = profile_data["state"]    
    zipcode  = profile_data["zipcode"]  
    # when we have the db, store the user info to the database
    user[userName]["fullName"] = fullName
    user[userName]["address1"] = address1
    user[userName]["address2"] = address2
    user[userName]["city"]     = city    
    user[userName]["state"]    = state   
    user[userName]["zipcode"]  = zipcode 
 
    print(user)
    return profile_data

if __name__ == "__main__":
    app.run(debug=True)