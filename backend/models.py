from pydantic import BaseModel, Field
from typing import Optional

class ProfileSchema(BaseModel):
    name:       Optional[str] = Field(max_length=50)
    address1:   Optional[str] = Field(max_length=100)
    address2:   Optional[str] = Field(max_length=100)
    city:       Optional[str] = Field(max_length=100)
    state:      Optional[str] = Field(max_length=2)
    zipcode:    Optional[str] = Field(max_length=9)

    class Config:
        schema_extra = {
            "example": {
                "name    ": "Apple",
                "address1": "123 Main st",
                "address2": "",
                "city    ": "Houston",   
                "state   ": "TX",
                "zipcode ": "77044",
            }
        }

class UserSchema(BaseModel):
    username: str = Field(...)
    password: str = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "username": "any",
                "password": "any"
            }
        }