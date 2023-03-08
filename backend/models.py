# from pydantic import BaseModel, Field
# from typing import Optional
# from . import db
# # class ProfileSchema(BaseModel):
# #     name:       Optional[str] = Field(max_length=50)
# #     address1:   Optional[str] = Field(max_length=100)
# #     address2:   Optional[str] = Field(max_length=100)
# #     city:       Optional[str] = Field(max_length=100)
# #     state:      Optional[str] = Field(max_length=2)
# #     zipcode:    Optional[str] = Field(max_length=9)

# #     class Config:
# #         schema_extra = {
# #             "example": {
# #                 "name    ": "Apple",
# #                 "address1": "123 Main st",
# #                 "address2": "",
# #                 "city    ": "Houston",   
# #                 "state   ": "TX",
# #                 "zipcode ": "77044",
# #             }
# #         }

# class User(db.Model):
#     id       = db.Column(db.Integer, primary_key=True)
#     username = db.Column(db.String(50))
#     password = db.Column(db.String(50))