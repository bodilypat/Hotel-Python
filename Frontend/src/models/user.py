# src/models/user.py
# -- This module defines the User model for the application, including fields for authentication and user management.
# -- It uses SQLAlchemy for ORM and includes password hashing for security.
# -- The User model includes fields for id, username, email, hashed_password, and is_active status.
# -- The model also includes methods for verifying passwords and setting hashed passwords.

from sqlalchemy import Column, Integer, String, Boolean
from app.db.database import Base
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, index=True, nullable=False)
    email = Column(String(100), unique=True, index=True, nullable=False)
    hashed_password = Column(String(255), nullable=False)
    phone_number = Column(String(20), nullable=True)
    role_id = Column(Integer, nullable=False) 
    is_active = Column(Boolean, default=True)

    def verify_password(self, password: str) -> bool:
        return pwd_context.verify(password, self.hashed_password)

    def set_password(self, password: str):
        self.hashed_password = pwd_context.hash(password)

    def __repr__(self):
        return f"<User(username='{self.username}', email='{self.email}', phone_number='{self.phone_number}', role_id={self.role_id}, is_active={self.is_active})>"
    
