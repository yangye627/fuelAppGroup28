import uvicorn
from fastapi import FastAPI, Body, Depends, Request, HTTPException, status
from fastapi.responses import JSONResponse
import motor.motor_asyncio
from motor.motor_asyncio import AsyncIOMotorClient
from models import ProfileSchema, UserSchema


from fastapi.middleware.cors import CORSMiddleware

# Initiating FastAPI Server
app = FastAPI()

# Managing CORS for the React Frontend connections
from fastapi.middleware.cors import CORSMiddleware
origins = [
    "http://localhost",
    "http://localhost:3000"
]

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017/')
database = client.fuelApp
collection = database.fuelAppCollection

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

users = []

@app.post("/create-user", response_description="Create a user")
async def create_user(request: Request, user: UserSchema = Body(...)):
    print(user)
    user = {
        "username": user.username,
        "password": user.password
    }
    new_user = await request.app.mongodb["user"].insert_one(user)
    create_user = await request.app.mongodb["user"].find_one(
        {"_id": new_user.inserted_id}
    )
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=create_user)


@app.put("/update-profile-{id}", response_description="Update a user profile")
async def update_user_profile(id: str, request: Request, user: ProfileSchema = Body(...)):
    user = {k: v for k, v in user.dict().items() if v is not None}

    if len(user) >= 1:
        update_result = await request.app.mongodb["user-info"].update_one(
            {"_id": id}, {"$set": user}
        )

        if update_result.modified_count == 1:
            if (
                updated_user := await request.app.mongodb["user-info"].find_one({"_id": id})
            ) is not None:
                return updated_user

    if (
        existing_user := await request.app.mongodb["user-info"].find_one({"_id": id})
    ) is not None:
        return existing_user

    raise HTTPException(status_code=404, detail=f"User {id} not found")

   